using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _3dArcheryRepos;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class BroadcastCommand : BaseCommand
    {
        protected override async void CustomExecute(string[] args, UserData user)
        {
            using var repos = new ArcheryRepos();
            
            var users = repos.GetAllUsers().Where(e => e.Role > UserRole.New);
            var builder = new StringBuilder();
            Parallel.ForEach(users, async usr =>
            {
                if (Equals(usr, Client.ConsoleUser) || Equals(usr, user)) return;
                builder.Append($"Broadcast sent to: {usr.Username}\n");
                await Client.SendMessage(usr.ChatId, $"Broadcast by {user.Username}:\n{args[0]}");
            });

            await Client.SendMessage(user.ChatId, BotMessages.BroadcastSent);
            builder.Remove(builder.Length - 1, 1);
            BotHelper.LogMessage(builder.ToString(), Client.ConsoleCommandBuilder); 
        }
    }
}