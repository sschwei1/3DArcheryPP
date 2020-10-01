using System.ComponentModel.DataAnnotations.Schema;

namespace _3dArcheryRepos.DatabaseContext
{
    public class DbUserPoints
    {
        [ForeignKey("EventUser")]
        public virtual int EventUserId { get; set; }
        public virtual DbEventUser EventUser { get; set; }
        
        [ForeignKey("Target")]
        public virtual int TargetId { get; set; }
        public virtual DbTarget Target { get; set; }
        
        public int Points { get; set; }
    }
}