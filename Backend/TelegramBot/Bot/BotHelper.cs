using System;
using System.Text;
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

        public static void LogMessage(string text, StringBuilder builder)
        {
            if (string.IsNullOrWhiteSpace(text))
                return;
            try
            {
                Console.CursorLeft = 0;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Encountered error: {ex.Message}");
            }
            
            var whiteSpaces = text.Length < builder.Length
                ? new string(' ', builder.Length - text.Length)
                : string.Empty;
            
            Console.WriteLine(text + whiteSpaces);
            Console.Write(builder.ToString());
        }

        public static void RemoveLastChar(StringBuilder builder)
        {
            builder.Remove(builder.Length - 1, 1);
            try
            {
                Console.CursorLeft -= 1;
                Console.Write(" ");
                Console.CursorLeft = 0;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Encountered error: {ex.Message}");
            }

            Console.Write(builder.ToString());
        }

        public static string[] GetArgs(StringBuilder builder)
        {
            if (builder == null)
                return new string[]{};
            
            var args = builder.ToString().Split(' ');
            args[0] = BotHelper.FixCommandString(args[0]);
            builder.Clear();
            Console.Write('\n');
            return args;
        }
    }
}