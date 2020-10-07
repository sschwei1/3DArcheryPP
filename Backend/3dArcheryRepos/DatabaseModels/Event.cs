using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _3dArcheryRepos.DatabaseContext
{
    [Table("Events")]
    public class DbEvent
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(64)]
        public string Name { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime? EndDate { get; set; }
        public DateTime CreationDate { get; set; }
        [Required]
        [MaxLength(6)]
        public string EventCode { get; set; }
        
        [ForeignKey("Track")]
        public int TrackId { get; set; }
        public virtual DbTrack Track { get; set; }
        
        [ForeignKey("Owner")]
        public int? OwnerId { get; set; }
        public virtual DbUser? Owner { get; set; }
        
        [ForeignKey("CountType")]
        public int CountTypeId { get; set; }
        public virtual DbCountType CountType { get; set; }
    }
}