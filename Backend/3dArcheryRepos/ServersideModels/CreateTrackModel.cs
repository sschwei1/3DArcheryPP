using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _3dArcheryRepos.ServersideModels
{
    public class CreateTrackModel
    {
        public string Name { get; set; }
        public int LocationId { get; set; }
        public List<int> Targets { get; set; }

        public bool Validate()
        {
            return !string.IsNullOrWhiteSpace(this.Name);
        }
    }
}
