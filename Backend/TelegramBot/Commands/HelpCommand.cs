using System.Threading.Tasks;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class HelpCommand : BaseCommand
    {
        protected override async void CustomExecute(string[] args, UserData user)
        {
            args[0] = BotHelper.FixCommandString(args[0]);
            
            if (Client.Commands.TryGetValue(args[0], out BaseCommand command))
                await Client.SendMessage(user.ChatId, command.GetUsageString(user));
            else
                await Client.SendMessage(user.ChatId, BotMessages.HelpCommandCommandNotFound);
        }
    }
}