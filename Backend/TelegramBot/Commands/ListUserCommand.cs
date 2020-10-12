using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _3dArcheryRepos;
using _3dArcheryRepos.DatabaseContext;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class ListUserCommand : BaseCommand
    {
        public ListUserCommand(TelegramBot client) : base(client){}
        public override string Name => CommandName.ListUser;
        public override string[] Aliases => CommandAliases.ListUser;
        protected override UserRole RequiredRole => UserRole.Admin;
        protected override string Description => BotMessages.ListUserCommandDescription;
        protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>();
        
        protected override async void CustomExecute(string[] args, UserData user)
        {
            using var repos = new ArcheryRepos();
            
            var users = repos.GetAllUsers();
            var msg = $"{string.Join("\n", users.Select(e => $"{e.ChatId}->{e.Username}({e.Role})"))}";
            await Client.SendMessage(user.ChatId, msg);
        }
    }
}