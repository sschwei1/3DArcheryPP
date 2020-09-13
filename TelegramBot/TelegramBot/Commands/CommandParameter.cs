using System;

namespace TelegramBot.Commands
{
    public class CommandParameter
    {
        public string Name { get; set; }
        public Type Type { get; set; }
        public string Description { get; set; }
    }
}