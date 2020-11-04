using System;
using System.Collections.Generic;
using System.Text;

namespace _3dArcheryRepos.ServersideModels
{
   public class UpdateTargetModel
    {
      

        public string Token { get; set; }
        public int UserId { get; set; }
        public int targetId { get; set; }
        public int points { get; set; }
    }
}
