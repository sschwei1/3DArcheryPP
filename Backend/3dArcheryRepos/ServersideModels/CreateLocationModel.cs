using System;
using System.Collections.Generic;
using System.Text;

namespace _3dArcheryRepos.ServersideModels
{
    public class CreateLocationModel
    {
        public string Name { get; set; }

        public bool Validate()
        {
            return !string.IsNullOrWhiteSpace(this.Name);
        }
    }
}
