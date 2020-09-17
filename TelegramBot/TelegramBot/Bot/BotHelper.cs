using System.Text.RegularExpressions;

namespace TelegramBot
{
    public static class BotHelper
    {
        public static string FixCommandString(string command)
        {
            return command.StartsWith("/") ? command.ToLower() : $"/{command.ToLower()}";
        }

        public static bool ValidateNickname(string nick)
        {
            var r = new Regex("^[a-zA-Z0-9]{3,15}$");
            return r.IsMatch(nick);
        }
    }
}