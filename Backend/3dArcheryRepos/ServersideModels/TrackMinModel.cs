using System;
using System.Collections.Generic;
using System.Text;

namespace _3dArcheryRepos.ServersideModels
{
    public class TrackMinModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public LocationModel Location { get; set; }

        public int TargetCount { get; set; }
    }
}
