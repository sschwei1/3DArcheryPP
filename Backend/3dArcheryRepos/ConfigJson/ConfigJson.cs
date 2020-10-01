using Newtonsoft.Json;

namespace _3dArcheryRepos.ConfigJson
{
    public class ConfigJson
    {
        [JsonProperty("connectionString")] 
        public string ConnectionString { get; private set; }
    }
}