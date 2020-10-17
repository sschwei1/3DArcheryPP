using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using _3dArcheryRepos;
using Newtonsoft.Json;
using Telegram.Bot;
using Telegram.Bot.Args;
using Telegram.Bot.Requests;
using Telegram.Bot.Types;
using TelegramBot.Commands;
using File = System.IO.File;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot
{
    public class TelegramBot
    {
        private HashSet<long> MessagesWhileOffline { get; set; }
        private ITelegramBotClient Client { get; }
        private ConfigJson Config { get; set; }
        public CommandManager CommandManager { get; set; }
        private bool IgnoreMessages { get; set; }
        public StringBuilder ConsoleCommandBuilder { get; private set; }
        public bool LoggingEnabled { get; set; }
        
        public UserData ConsoleUser => new UserData(){ ChatId = 0, Username = "Console", Role = UserRole.Console};

        public TelegramBot()
        {
            IgnoreMessages = true;
            MessagesWhileOffline = new HashSet<long>();
            ConsoleCommandBuilder = new StringBuilder();
            LoggingEnabled = true;

            InitConfig();

            Client = new TelegramBotClient(Config.Token);
            var me = Client.GetMeAsync().Result;
            BotHelper.LogMessage($"Bot info\nId:{me.Id}\nName:{me.FirstName}.", ConsoleCommandBuilder);

            CommandManager = new CommandManager(this);
            
            Client.OnMessage += HandleMessage;
        }

        public async Task Start()
        {
            Client.StartReceiving();
            await RemoveOldMessages();
            BotHelper.LogMessage("Successfully started bot!", ConsoleCommandBuilder);
            this.ConsoleCommands();
            this.Stop();
        }

        private void ConsoleCommands()
        {
            while (true)
            {
                var keyInfo = Console.ReadKey(true);

                switch (keyInfo.Key)
                {
                    case ConsoleKey.Delete:
                        return;

                    case ConsoleKey.Backspace:
                        if (ConsoleCommandBuilder.Length > 0)
                            BotHelper.RemoveLastChar(ConsoleCommandBuilder);
                        break;

                    case ConsoleKey.Enter:
                        if (ConsoleCommandBuilder.Length > 0)
                        {
                            var args = BotHelper.GetArgs(ConsoleCommandBuilder);
                            TryExecuteCommand(ConsoleUser, args);
                        }

                        break;

                    default:
                        var ch = keyInfo.KeyChar;
                        if (Regex.IsMatch(keyInfo.KeyChar.ToString(), "^[ -~]*$"))
                        {
                            ConsoleCommandBuilder.Append(keyInfo.KeyChar);
                            Console.Write(keyInfo.KeyChar);
                        }
                        break;
                }
            }
        }

        private void Stop()
        {
            Client.StopReceiving();
        }

        private async void HandleMessage(object sender, MessageEventArgs e)
        {
            
            if (IgnoreMessages)
            {
                if(MessagesWhileOffline.Add(e.Message.Chat.Id))
                    await SendMessage(e.Message.Chat.Id, BotMessages.SorryMessage);
                
                return;
            }

            if (e.Message.Text == null) return;
            var args = e.Message.Text.Split(' ');
            
            using var repos = new ArcheryRepos();
            var user = repos.GetUserByChatId(e.Message.Chat.Id);
            
            if(user.Role >= UserRole.Admin || LoggingEnabled)
                BotHelper.LogMessage($"Received message from ({user.Username ?? "-"}/{user.ChatId}): {e.Message.Text}", ConsoleCommandBuilder);
            
            TryExecuteCommand(user, args);
        }

        private async void TryExecuteCommand(UserData user, string[] args)
        {
            if (CommandManager.TryGetCommand(args[0], out BaseCommand command))
            {
                command.Execute(args.Skip(1).ToArray(), user);
                return;
            }
            
            await SendMessage(user.ChatId, BotMessages.UnknownCommand);
        }

        public async Task SendMessage(long id, string message)
        {
            if (id == ConsoleUser.ChatId)
            {
                BotHelper.LogMessage(message, ConsoleCommandBuilder, ConsoleUser);
                return;
            }

            try
            {
                await Client.SendTextMessageAsync(
                    chatId: id,
                    text: message
                );
            }
            catch (Exception ex)
            {
                BotHelper.LogMessage($"Error sending message to {id}\n{ex.Message}", ConsoleCommandBuilder, ConsoleUser);
            }
        }

        private async Task RemoveOldMessages()
        {
            await Task.Delay(2500);
            BotHelper.LogMessage("Removed old Messages!", ConsoleCommandBuilder);
            IgnoreMessages = false;
        }

        private void InitConfig()
        {
            var settings = new JsonSerializerSettings();
            settings.MissingMemberHandling = MissingMemberHandling.Ignore;
            
            string json;
            using(var fs = File.OpenRead("config.json"))
            using (var sr = new StreamReader(fs, new UTF8Encoding(false)))
            {
                json = sr.ReadToEnd();
            }

            this.Config = JsonConvert.DeserializeObject<ConfigJson>(json, settings);
        }
    }
}