using System.Linq;
using System.Threading.Tasks;
using _3dArcheryRepos;
using _3dArcheryRepos.ServersideModels;
using Telegram.Bot;

namespace TelegramBot.Commands
{
    public class RegisterCommand : BaseCommand
    {
        protected override bool CustomCanExecute(UserData user)
        {
            return user.Role == RequiredRole;
        }

        protected override async Task ConsoleExecute(string[] args, UserData user)
        {
            await Client.SendMessage(user.ChatId, BotMessages.ConsoleRegister);
        }

        protected override async Task CustomExecute(string[] args, UserData user)
        {
            using var repos = new ArcheryRepos();

            if (user.Role != UserRole.New)
            {
                await Client.SendMessage(user.ChatId, BotMessages.AlreadyRegistered);
                return;
            }
            
            if (repos.CheckIfUserExists(args[0]))
            {
                await Client.SendMessage(user.ChatId, BotMessages.UsernameExists);
                return;
            }

            if (!BotHelper.ValidateNickname(args[0]))
            {
                await Client.SendMessage(user.ChatId, BotMessages.InvalidNickname);
                return;
            }

            repos.RegisterUser(user, args[0]);
            await Client.SendMessage(user.ChatId, BotMessages.RegisterCommandRegistered + args[0]);
        }
    }
}