using _3dArcheryRepos;
using _3dArcheryRepos.ServersideModels;
using System;
using System.Collections.Generic;
using System.Text;
using Telegram.Bot.Types;

namespace TelegramBot.Commands
{
    public class CreateEventCommand : BaseCommand
    {
        public CreateEventCommand(TelegramBot client) : base(client) { }
        public override string Name => CommandName.CreateEvent;
        protected override UserRole RequiredRole => UserRole.Registered;
        protected override string Description => BotMessages.CreateEventDescription;
        protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>() {
            new CommandParameter() {Description = "code of event", Name = "eventCode"}
        };

        protected override async void CustomExecute(string[] args, UserData user)
        {
            using var repos = new ArcheryRepos();

           // if (!repos.EventCodeExists(args[0]))
            //{
           //     await Client.SendMessage(user.ChatId, BotMessages.CreateEventNotFound);
           //     return;
           // }

            if (repos.UserHasEvent(user.ChatId))
            {
                await Client.SendMessage(user.ChatId, BotMessages.CreateUserHasEvent);
                return;
            }

          //  repos.AddOwnerToEvent(user.ChatId, args[0]);
           // await Client.SendMessage(user.ChatId, BotMessages.RegisterCommandRegistered + args[0]);
        }
    }
}
