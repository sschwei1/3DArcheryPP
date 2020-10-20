using System;
using System.IO;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Telegram.Bot;
using Telegram.Bot.Args;
using Telegram.Bot.Types;
using TelegramBot.Commands;
using File = System.IO.File;

namespace TelegramBot
{
    public static class Program {
        public static async Task Main() {
            // var bot = new TelegramBot();
            // await bot.Start();
            var client = new TelegramBotClient("1353936413:AAEDXgNywuvtDhMi-bREY6LD_TuSjsRf3N0");
            await client.SendTextMessageAsync(1297488807, "test");
        }
    }
}
