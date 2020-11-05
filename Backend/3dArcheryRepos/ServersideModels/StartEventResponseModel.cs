using System;
using System.Collections.Generic;
using System.Text;

namespace _3dArcheryRepos.ServersideModels
{
    public class StartEventResponseModel
    {
        public string Name { get; set; }
        public int CountType { get; set; }

        public TrackStartEventModel TrackInfo { get; set; }
        public List<TargetMinModel> Targets  { get; set; }
        public List<UserMinModel> Users { get; set; }
    }
}
