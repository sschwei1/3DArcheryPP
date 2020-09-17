using System.Runtime.CompilerServices;
using Telegram.Bot.Types;
using TelegramBot.Commands;

namespace TelegramBot
{
    public enum UserRole
    {
        New = 0,
        Registered = 1
    }
    
    public class UserData
    {
        public long ChatId { get; set; }
        public string Username { get; set; }
        public UserRole Role { get; set; }
    }
}