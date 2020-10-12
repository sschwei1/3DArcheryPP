using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class RemoveAdminCommand : SetRankCommand
    {
        public RemoveAdminCommand(TelegramBot client) : base(client){}

        public override string Name => CommandName.RemoveAdmin;
        public override string[] Aliases => CommandAliases.RemoveAdmin;
        protected override string Description => BotMessages.RemoveAdminCommandDescription;
        protected override UserRole SetRole => UserRole.Registered;
        protected override string ChangeMessage => BotMessages.RemoveAdminRoleChangeMessage;
    }
}