using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class MakeAdminCommand : SetRankCommand
    {
        public MakeAdminCommand(TelegramBot client) : base(client){}
        public override string Name => CommandName.MakeAdmin;
        public override string[] Aliases => CommandAliases.MakeAdmin;
        protected override string Description => BotMessages.MakeAdminCommandDescription;
        protected override UserRole SetRole => UserRole.Admin;
        protected override string ChangeMessage => BotMessages.MakeAdminRoleChangeMessage;
    }
}