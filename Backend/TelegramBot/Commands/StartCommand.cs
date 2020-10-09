using System.Threading.Tasks;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class StartCommand : BaseCommand
    {
        protected override async void CustomExecute(string[] args, UserData user)
        {
            await Client.SendMessage(user.ChatId, this.Description);
        }
    }
}