using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
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
        public Dictionary<string, BaseCommand> Commands { get; set; }
        private bool IgnoreMessages { get; set; }

        public TelegramBot()
        {
            IgnoreMessages = true;
            MessagesWhileOffline = new HashSet<long>();
            
            InitConfig();

            Client = new TelegramBotClient(Config.Token);
            var me = Client.GetMeAsync().Result;
            Console.WriteLine($"Bot info\nId:{me.Id}\nName:{me.FirstName}.");

            InitCommands();
            
            Client.OnMessage += HandleMessage;
        }

        public async void Start()
        {
            Client.StartReceiving();
            await RemoveOldMessages();
            Console.WriteLine("Successfully started bot!");
        }

        public void Stop()
        {
            Client.StopReceiving();
        }

        private async void HandleMessage(object sender, MessageEventArgs e)
        {
            if (IgnoreMessages)
            {
                if(MessagesWhileOffline.Add(e.Message.Chat.Id))
                    await SendMessage(e.Message.Chat.Id,BotMessages.SorryMessage);
                
                return;
            }

            if (e.Message.Text == null) return;
            var args = e.Message.Text.Split(' ');
                
            args[0] = BotHelper.FixCommandString(args[0]);

            if (Commands.TryGetValue(args[0], out BaseCommand command))
            {
                using var repos = new ArcheryRepos();
                
                var user = repos.GetUserByChatId(e.Message.Chat.Id);
                command.Execute(args.Skip(1).ToArray(), user);
                return;
            }
            
            await SendMessage(e.Message.Chat.Id, BotMessages.UnknownCommand);
        }

        public async Task SendMessage(long id, string message)
        {
            Console.WriteLine($"Message sent to id:{id}");
            await Client.SendTextMessageAsync(
                chatId: id,
                text: message
            );
        }

        private async Task RemoveOldMessages()
        {
            await Task.Delay(2500);
            Console.WriteLine("Removed old Messages!");
            IgnoreMessages = false;
        }

        private void InitConfig()
        {
            string json;
            
            using(var fs = File.OpenRead("config.json"))
            using (var sr = new StreamReader(fs, new UTF8Encoding(false)))
            {
                json = sr.ReadToEnd();
            }

            this.Config = JsonConvert.DeserializeObject<ConfigJson>(json);
        }

        private void InitCommands()
        {
            Commands = new Dictionary<string, BaseCommand>()
            {
                {
                    CommandName.Test,
                    new TestCommand()
                    {
                        Client = this,
                        Name = CommandName.Test,
                        RequiredRole = UserRole.New,
                        Parameters = new List<CommandParameter>()
                        {
                            new CommandParameter() {Name = "param1", Description = "super useful"}
                        },
                        Description = BotMessages.TestCommandDescription
                    }
                },
                { 
                    CommandName.Start, 
                    new StartCommand()
                    {
                        Client = this,
                        Name = CommandName.Start,
                        RequiredRole = UserRole.New,
                        Parameters = new List<CommandParameter>(),
                        Description = BotMessages.StartCommandDescription
                    }
                },
                { 
                    CommandName.Help, 
                    new HelpCommand()
                    {
                        Client = this,
                        Name = CommandName.Help,
                        RequiredRole = UserRole.New,
                        Parameters = new List<CommandParameter>()
                        {
                            new CommandParameter(){ Name = "command", Description = "Command you need help with." }
                        },
                        Description = BotMessages.HelpCommandDescription
                    }
                },
                {
                    CommandName.Commands,
                    new CommandsCommand()
                    {
                        Client = this,
                        Name = CommandName.Commands,
                        RequiredRole = UserRole.New,
                        Parameters = new List<CommandParameter>(),
                        Description = BotMessages.CommandsCommandDescription
                    }
                },
                {
                    CommandName.Register,
                    new RegisterCommand()
                    {
                        Client = this,
                        Name = CommandName.Register,
                        RequiredRole = UserRole.New,
                        Parameters = new List<CommandParameter>()
                        {
                            new CommandParameter() { Name = "nickname", Description = "Nickname used " }
                        },
                        Description = BotMessages.RegisterCommandDescription
                    }
                },
                {
                    CommandName.ChangeNickname,
                    new ChangeNicknameCommand()
                    {
                        Client = this,
                        Name = CommandName.ChangeNickname,
                        RequiredRole = UserRole.Registered,
                        Parameters = new List<CommandParameter>()
                        {
                            new CommandParameter() { Name = "nickname", Description = "Nickname used " }
                        },
                        Description = BotMessages.ChangeNicknameCommandDescription
                    }
                }
                // changeNick <nickname> (change nickname of user)
                // accept (invited to event, accept invatation)
                // createEvent <event id> (create event via site and get code to create it)
                // closeEvent (stops current event running on user)
            };
        }
    }
}