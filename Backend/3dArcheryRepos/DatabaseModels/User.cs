using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _3dArcheryRepos.DatabaseContext
{
    [Table("Users")]
    public class DbUser
    {
        [Key]
        public int Id { get; set; }
        public long ChatId { get; set; }
        [MaxLength(16)]
        public string Username { get; set; }
        public int Role { get; set; }

        [MaxLength(32)]
        public string Token { get; set; }

        public string ShortToken { get; set; }

        public DateTime ShortTokenCreationDate { get; set; }
    }
}