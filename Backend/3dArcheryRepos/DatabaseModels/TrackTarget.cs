using System.ComponentModel.DataAnnotations.Schema;

namespace _3dArcheryRepos.DatabaseContext
{
    [Table("TrackTargets")]
    public class DbTrackTarget
    {
        [ForeignKey("Track")]
        public virtual int TrackId { get; set; }
        public virtual DbTrack Track { get; set; }
        
        [ForeignKey("Target")]
        public virtual int TargetId { get; set; }
        public virtual DbTarget Target { get; set; }
    }
}