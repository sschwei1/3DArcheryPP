using _3dArcheryRepos;
using _3dArcheryRepos.ServersideModels;
using System;
using System.Collections.Generic;
using System.Text;
using Telegram.Bot.Types;

namespace TelegramBot.Commands
{
    public class AbortEventCommand:BaseCommand
    {
        public AbortEventCommand(TelegramBot client) : base(client) { }
        public override string Name => CommandName.AbortEvent;
        protected override UserRole RequiredRole => UserRole.Registered;
        protected override string Description => BotMessages.AbortEventDescription;
        protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>();

        protected override async void CustomExecute(string[] args, UserData user)
        {
            using var repos = new ArcheryRepos();


            if (!repos.UserHasEvent(user.ChatId))
            {
                await Client.SendMessage(user.ChatId, BotMessages.AbortEventNoEvent);
                return;
            }

            repos.AbortEvent(user);
            await Client.SendMessage(user.ChatId, BotMessages.AbortEventSuccess);
        }
    }
}
