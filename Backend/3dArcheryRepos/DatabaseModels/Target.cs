using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _3dArcheryRepos.DatabaseContext
{
    [Table("Targets")]
    public class DbTarget
    {
        [Key]
        public int Id { get; set; }
        public int Size { get; set; }
        
        [ForeignKey("Type")]
        public virtual int TypeId { get; set; }
        public virtual DbTargetType Type { get; set; }
    }
}