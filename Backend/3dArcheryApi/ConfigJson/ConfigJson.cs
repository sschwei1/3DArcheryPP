using Newtonsoft.Json;

namespace _3dArcheryApi
{
    public class ConfigJson
    {
        [JsonProperty("hostAddress")] 
        public string HostAddress { get; private set; }
    }
}