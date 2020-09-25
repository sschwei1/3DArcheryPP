using System.Collections;
using System.Collections.Generic;
using Telegram.Bot;

namespace TelegramBot.Commands
{
    public enum CommandPermission {
        New = 1,
        Registered = 2
    }
    public interface ICommand
    {
        TelegramBot Client { get; }
        CommandPermission PermissionRequired { get; }
        string Description { get; } 
        IEnumerable<CommandParameter> Parameters { get; }
        int ArgsCount { get; set; }
        void Execute(string Id);
    }
}