using System.Linq;
using System.Threading.Tasks;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class CommandsCommand : BaseCommand
    {
        protected override async Task CustomExecute(string[] args, UserData user)
        {
            var availableCommands = Client.Commands
                .Where(e => e.Value.CanExecute(user))
                .Select(e => e.Value.Name)
                .ToList();

            var msg = $"{BotMessages.CommandsCommandAvailableCommands}{string.Join("\n", availableCommands)}";
            await Client.SendMessage(user.ChatId, msg);
        }
    }
}