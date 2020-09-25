using Newtonsoft.Json;

namespace _3dArcheryRepos.ConfigJson
{
    public class ConfigJson
    {
        [JsonProperty("ConnectionString")] 
        public string Token { get; private set; }
    }
}