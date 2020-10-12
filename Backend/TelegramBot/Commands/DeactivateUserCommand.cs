using System.Collections.Generic;
using _3dArcheryRepos;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class DeactivateUserCommand : BaseCommand
    {
        public DeactivateUserCommand(TelegramBot client) : base(client){}
        public override string Name => CommandName.DeactivateUser;
        protected override UserRole RequiredRole => UserRole.Registered;
        protected override string Description => BotMessages.DeactivateUserCommandDescription;
        protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>();
        
        protected override async void CustomExecute(string[] args, UserData user)
        {
            using var repos = new ArcheryRepos();
            repos.DeactivateUser(user.ChatId);
            await Client.SendMessage(user.ChatId, BotMessages.DeactivateUserMessage);
        }
        
        protected override async void ConsoleExecute(string[] args, UserData user)
        {
            await Client.SendMessage(user.ChatId, BotMessages.ConsoleDeactivate);
        }
    }
}