using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _3dArcheryRepos.DatabaseContext
{
    [Table("TargetTypes")]
    public class DbTargetType
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(64)]
        public string Name { get; set; }
    }
}