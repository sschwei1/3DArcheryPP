using System.ComponentModel.DataAnnotations.Schema;

namespace _3dArcheryRepos.DatabaseContext
{
    [Table("TrackTargets")]
    public class DbTrackTarget
    {
        [ForeignKey("Track")]
        public int TrackId { get; set; }
        public virtual DbTrack Track { get; set; }
        
        [ForeignKey("Target")]
        public int TargetId { get; set; }
        public virtual DbTarget Target { get; set; }
    }
}