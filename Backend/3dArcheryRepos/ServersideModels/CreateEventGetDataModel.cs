using System;
using System.Collections.Generic;
using System.Text;

namespace _3dArcheryRepos.ServersideModels
{
    public class CreateEventGetDataModel
    {
        public string Name { get; set; }
        public int TrackId { get; set; }
        public int CountTypeId { get; set; }

        public List<int> EventUsers { get; set; }

    }
}
