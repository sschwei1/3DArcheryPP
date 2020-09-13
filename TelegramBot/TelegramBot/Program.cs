using System;
using System.IO;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using Newtonsoft.Json;
using Telegram.Bot;
using Telegram.Bot.Args;
using Telegram.Bot.Types;
using TelegramBot.Commands;
using File = System.IO.File;

namespace TelegramBot
{
    public class Program {

        public static void Main() {
            var bot = new TelegramBot();
            // bot.Start();
            
            var baseCommandInterface = typeof(ICommand);
            var commands = AppDomain.CurrentDomain.GetAssemblies()
                .SelectMany(s => s.GetTypes())
                .Where(p => baseCommandInterface.IsAssignableFrom(p));

            Console.ReadKey();
        }
    }
}
