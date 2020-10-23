using System;
using System.Collections.Generic;
using System.Text;

namespace _3dArcheryRepos.ServersideModels
{
    class CreateEventModel
    {
        public string Name  { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public DateTime CreationDate { get; set; }
        public int EventCode { get; set; }
        public int TrackId { get; set; }
        public int CountTypeId { get; set; }

    }
}
