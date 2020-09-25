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
    public static class Program {
        public static void Main() {
            var bot = new TelegramBot();
            bot.Start();
            Console.ReadKey();
            bot.Stop();
        }
    }
}
