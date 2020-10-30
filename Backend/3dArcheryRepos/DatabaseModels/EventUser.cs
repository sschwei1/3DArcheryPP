using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.Extensions.Logging;

namespace _3dArcheryRepos.DatabaseContext
{
    [Table("EventUsers")]
    public class DbEventUser
    {
        [Key] public int Id { get; set; }

        public bool HasAccepted { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }
        public virtual DbUser User { get; set; }
        
        [ForeignKey("Event")]
        public int EventId { get; set; }
        public virtual DbEvent Event { get; set; }
    }
}