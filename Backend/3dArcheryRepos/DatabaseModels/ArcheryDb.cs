using Microsoft.EntityFrameworkCore;

namespace _3dArcheryRepos.DatabaseContext
{
    public class ArcheryDb : DbContext
    {
        private static readonly string DefaultConnection =
            "server=localhost;userid=test;password=password;database=archeryTestDb;";
        
        private string ConnectionString { get; set; }
        
        
        
        public ArcheryDb(string connectionString = "")
        {
            ConnectionString = (string.IsNullOrWhiteSpace(connectionString) ?
                ArcheryDb.DefaultConnection : connectionString);
            
            this.Database.EnsureCreated();
        }
        
        public DbSet<DbUser> Users { get; set; }
        public DbSet<DbEvent> Events { get; set; }
        public DbSet<DbEventUser> EventUsers { get; set; }
        public DbSet<DbUserPoints> UserPoints { get; set; }
        public DbSet<DbCountType> CountTypes { get; set; }
        public DbSet<DbTrack> Tracks { get; set; }
        public DbSet<DbLocation> Locations { get; set; }
        public DbSet<DbTrackTarget> TrackTargets { get; set; }
        public DbSet<DbTarget> Targets { get; set; }
        public DbSet<DbTargetType> TargetTypes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseMySql(this.ConnectionString);
        }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DbEventUser>()
                .HasIndex(x => new {x.EventId, x.UserId})
                .IsUnique();

            modelBuilder.Entity<DbUser>()
                .HasIndex(x => x.ChatId)
                .IsUnique();

            modelBuilder.Entity<DbTrackTarget>()
                .HasKey(x => new {x.TargetId, x.TrackId});

            modelBuilder.Entity<DbUserPoints>()
                .HasKey(x => new {x.EventUserId, x.TargetId});
        }
    }
}