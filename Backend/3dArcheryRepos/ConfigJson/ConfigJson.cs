using Newtonsoft.Json;

namespace _3dArcheryRepos
{
    public class ConfigJson
    {
        [JsonProperty("connectionString")] 
        public string ConnectionString { get; private set; }
    }
}