using System.Linq;
using System.Threading.Tasks;

namespace TelegramBot.Commands
{
    public class CommandsCommand : BaseCommand
    {
        protected override async Task<bool> CheckExecute(string[] args, UserData user)
        {
            if (!CanExecute(user))
            {
                await Client.SendMessage(user.ChatId, BotMessages.NoPermission);
                return false;
            }

            if (args.Length == 0)
            {
                return true;
            }

            if (args.Length != Parameters.Count())
            {
                await Client.SendMessage(user.ChatId, $"{BotMessages.InvalidAmountOfArgs}\n\n{GetUsageString()}");
                return false;
            }

            return true;
        }
        protected override async void CustomExecute(string[] args, UserData user)
        {
            var availableCommands = Client.Commands
                .Where(e => e.Value.CanExecute(user))
                .Select(e => e.Value.Name)
                .ToList();

            await Client.SendMessage(
                user.ChatId,
                $"{BotMessages.CommandsCommandAvailableCommands}{string.Join("\n",availableCommands)}"
            );
        }
    }
}