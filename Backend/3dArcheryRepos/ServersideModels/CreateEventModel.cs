using System;
using System.Collections.Generic;
using System.Text;

namespace _3dArcheryRepos.ServersideModels
{
    public class CreateEventModel
    {
        public string Name  { get; set; }
        public DateTime CreationDate { get; set; }
        public string EventCode { get; set; }
        public int TrackId { get; set; }
        public int CountTypeId { get; set; }

    }
}
