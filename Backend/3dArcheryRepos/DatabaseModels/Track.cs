using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography;

namespace _3dArcheryRepos.DatabaseContext
{
    [Table("Tracks")]
    public class DbTrack
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(64)]
        public string Name { get; set; }
        
        [ForeignKey("Location")]
        public int LocationId { get; set; }
        public virtual DbLocation Location { get; set; }
    }
}