using System;
using System.IO;
using System.Text;
using Newtonsoft.Json;
using Telegram.Bot;
using Telegram.Bot.Args;

namespace TelegramBot
{
    public class TelegramBot
    {
        public ITelegramBotClient Client { get; }
        public ConfigJson Config { get; set; }

        public TelegramBot()
        {
            InitConfig();
            
            Client = new TelegramBotClient(Config.Token);
            var me = Client.GetMeAsync().Result;
            Console.WriteLine($"Bot info\nId:{me.Id}\nName:{me.FirstName}.");

            Client.OnMessage += HandleMessage;
        }

        public void Start()
        {
            Client.StartReceiving();
            
            Console.WriteLine("Press any key to stop the bot");
            Console.ReadKey();
            
            Client.StopReceiving();
        }

        public async void HandleMessage(object sender, MessageEventArgs e)
        {
            if (e.Message.Text != null)
            {
                Console.WriteLine($"Received a text message in chat {e.Message.Chat.Id}");

                await Client.SendTextMessageAsync(
                    chatId: e.Message.Chat,
                    text: $"You said:\n{e.Message.Text}"
                );
            }
        }

        public void InitConfig()
        {
            var json = string.Empty;
            
            using(var fs = File.OpenRead("config.json"))
            using (var sr = new StreamReader(fs, new UTF8Encoding(false)))
            {
                json = sr.ReadToEnd();
            }

            this.Config = JsonConvert.DeserializeObject<ConfigJson>(json);
        }
    }
}