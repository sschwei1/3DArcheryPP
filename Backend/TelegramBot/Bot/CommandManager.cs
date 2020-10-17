using System;
using System.Collections.Generic;
using System.Linq;
using TelegramBot.Commands;

namespace TelegramBot
{
    public class CommandManager
    {
        public List<BaseCommand> Commands { get; private set; }
        private TelegramBot Client { get; set; }

        public CommandManager(TelegramBot client)
        {
            Client = client;
            InitCommands();
        }

        private void InitCommands()
        {
            Commands = AppDomain.CurrentDomain.GetAssemblies()
                .SelectMany(assembly => assembly.GetTypes())
                .Where(type => type.IsSubclassOf(typeof(BaseCommand)) && !type.IsAbstract)
                .Select(type => Activator.CreateInstance(type, Client) as BaseCommand)
                .ToList();
        }

        public bool TryGetCommand(string commandString, out BaseCommand command)
        {
            commandString = BotHelper.FixCommandString(commandString);

            command = Commands.SingleOrDefault(e =>
                IsMatch(e.Name, commandString) ||
                e.Aliases.Any(a => IsMatch(a, commandString)));

            return command != null;
        }

        private bool IsMatch(string str1, string str2)
        {
            return string.Equals(str1, str2, StringComparison.CurrentCultureIgnoreCase);
        }
    }
}