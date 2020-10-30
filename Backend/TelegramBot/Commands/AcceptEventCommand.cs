using _3dArcheryRepos;
using _3dArcheryRepos.ServersideModels;
using System;
using System.Collections.Generic;
using System.Text;
using Telegram.Bot.Types;

namespace TelegramBot.Commands
{
    public class AcceptEventCommand : BaseCommand
    {
        public AcceptEventCommand(TelegramBot client) : base(client) { }
        public override string Name => CommandName.AcceptEvent;
        protected override UserRole RequiredRole => UserRole.Registered;
        protected override string Description => BotMessages.AcceptEventDescription;
        protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>();

        protected override async void CustomExecute(string[] args, UserData user)
        {
            using var repos = new ArcheryRepos();


            if (!repos.UserHasInvite(user.ChatId))
            {
                await Client.SendMessage(user.ChatId, BotMessages.AcceptEventNoInvite);
                return;
            }

            if (repos.AcceptEvent(user){
                await Client.SendMessage(user.ChatId, BotMessages.AcceptEventSuccess);
            }
            else
            {
                await Client.SendMessage(user.ChatId, BotMessages.AcceptEventFailed);
            }
        }
    }
}
