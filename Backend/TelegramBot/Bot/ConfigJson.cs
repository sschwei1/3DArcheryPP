using Newtonsoft.Json;

namespace TelegramBot
{
    public struct ConfigJson
    {
        [JsonProperty("token")]
        public string Token { get; private set; }
    }
}