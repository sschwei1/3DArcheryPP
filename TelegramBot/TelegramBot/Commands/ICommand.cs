using System.Collections;
using System.Collections.Generic;
using Telegram.Bot;

namespace TelegramBot.Commands
{
    public interface ICommand
    {
        string Command { get; }
        TelegramBot Client { get; }
        string PermissionRequired { get; }
        string Description { get; } 
        IEnumerable<CommandParameter> Parameters { get; }
        void Execute(string Id);
    }
}