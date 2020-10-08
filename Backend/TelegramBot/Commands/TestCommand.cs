using System.Linq;
using System.Threading.Tasks;
using _3dArcheryRepos;
using _3dArcheryRepos.DatabaseContext;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class TestCommand : BaseCommand
    {
        protected override async Task CustomExecute(string[] args, UserData user)
        {
            using var repos = new ArcheryRepos();
            
            var users = repos.GetAllUsers();
            var msg = $"{string.Join("\n", users.Select(e => $"{e.ChatId}->{e.Username}"))}";
            await Client.SendMessage(user.ChatId, msg);
        }
    }
}