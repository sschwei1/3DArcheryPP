using System.ComponentModel.DataAnnotations.Schema;

namespace _3dArcheryRepos.DatabaseContext
{
    [Table("UserPoints")]
    public class DbUserPoints
    {
        [ForeignKey("EventUser")]
        public int EventUserId { get; set; }
        public virtual DbEventUser EventUser { get; set; }
        
        [ForeignKey("Target")]
        public int TargetId { get; set; }
        public virtual DbTarget Target { get; set; }
        
        public int Points { get; set; }
    }
}