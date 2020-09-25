using System;

namespace TelegramBot.Commands
{
    public class CommandParameter
    {
        public string Name { get; set; }
        public string Description { get; set; }

        public string GetInfoString()
        {
            return $" -> {this.Name}: {this.Description}";
        }
    }
}