using System;
using System.Text.RegularExpressions;
using _3dArcheryRepos.ServersideModels;

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

        public static void LogMessage(UserData usr, string message)
        {
            Console.WriteLine($"Received message from (${usr.Username ?? "-"}/${usr.ChatId}): ${message}");
        }
    }
}