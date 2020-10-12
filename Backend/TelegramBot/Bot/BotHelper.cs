using System;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Text.RegularExpressions;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot
{
    public static class BotHelper
    {
        private static string LinePrefix = "-> ";
        private static string ConsolePrefix = "~  ";

        
        public static string FixCommandString(string command)
        {
            return command.TrimStart('/');
        }

        public static bool ValidateNickname(string nick)
        {
            var r = new Regex("^[a-zA-Z0-9]{3,15}$");
            return r.IsMatch(nick);
        }

        public static void LogMessage(string text, StringBuilder builder, UserData user = null)
        {
            if (string.IsNullOrWhiteSpace(text))
                return;
            
            try
            {
                Console.CursorLeft = 0;
                Console.Write(new string(' ', builder.Length));
                Console.CursorLeft = 0;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Encountered error: {ex.Message}");
            }

            if (user?.IsConsole ?? false)
                text = $"{ConsolePrefix}{text.Replace("\n", "\n" + ConsolePrefix)}";

            Console.WriteLine(text);
            Console.Write(LinePrefix + builder.ToString());
        }

        public static void RemoveLastChar(StringBuilder builder)
        {
            builder.Remove(builder.Length - 1, 1);
            try
            {
                Console.CursorLeft -= 1;
                Console.Write(" ");
                Console.CursorLeft = ConsolePrefix.Length;
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
            
            var args = builder.ToString().Replace("\\n", "\n").Split(' ');
            builder.Clear();
            Console.Write('\n');
            return args;
        }
    }
}