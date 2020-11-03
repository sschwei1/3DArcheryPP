using _3dArcheryRepos;
using _3dArcheryRepos.ServersideModels;
using System;
using System.Collections.Generic;
using System.Text;
using Telegram.Bot.Types;

namespace TelegramBot.Commands
{
    public class GenerateShortTokenCommand : BaseCommand
    {
        public GenerateShortTokenCommand(TelegramBot client) : base(client) { }
        public override string Name => CommandName.GenerateToken;
        protected override UserRole RequiredRole => UserRole.Registered;
        protected override string Description => BotMessages.GenerateTokenDescription;
        protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>();

        protected override async void CustomExecute(string[] args, UserData user)
        {
            using var repos = new ArcheryRepos();


            if (!repos.UserIsOwner(user.ChatId))
            {
                await Client.SendMessage(user.ChatId, BotMessages.NotAOwner);
                return;
            }

            var usr = repos.GenerateShortToken(user);
            string msg = BotMessages.TokenGenerated + usr.ShortToken;
            await Client.SendMessage(user.ChatId, msg);
        }
    }
}
