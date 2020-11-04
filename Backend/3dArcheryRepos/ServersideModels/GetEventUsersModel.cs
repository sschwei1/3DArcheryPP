using System;
using System.Collections.Generic;
using System.Text;

namespace _3dArcheryRepos.ServersideModels
{
    public class GetEventUsersModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool HasAccepted { get; set; }
    }
}
