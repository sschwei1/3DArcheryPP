using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using TeleBot = TelegramBot.TelegramBot;

namespace _3dArcheryApi
{
    public static class BotHelper
    {
        public static TeleBot TeleBot { get; private set; }
        public static bool IsRunning { get; private set; }
        public static async void BotThread()
        {
            if (!IsRunning)
            {
                TeleBot = new TeleBot();
                await TeleBot.Start();
                IsRunning = false;
            }
        }
    }
}
