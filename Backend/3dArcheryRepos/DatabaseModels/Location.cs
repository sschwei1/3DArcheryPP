using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _3dArcheryRepos.DatabaseContext
{
    [Table("Locations")]
    public class DbLocation
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(64)]
        public string Name { get; set; }
    }
}