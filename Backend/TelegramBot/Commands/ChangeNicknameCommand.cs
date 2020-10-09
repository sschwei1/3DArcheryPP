using System.Linq;
using System.Threading.Tasks;
using _3dArcheryRepos;
using _3dArcheryRepos.DatabaseContext;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class ChangeNicknameCommand : BaseCommand
    {
        protected override async Task CustomExecute(string[] args, UserData user)
        {
            using var repos = new ArcheryRepos();
            
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

            repos.UpdateNickname(user, args[0]);
            user.Username = args[0];
            await Client.SendMessage(user.ChatId, BotMessages.ChangeNicknameCommandChangedNick + args[0]);
        }

        protected override async Task ConsoleExecute(string[] args, UserData user)
        {
            await Client.SendMessage(user.ChatId, BotMessages.ConsoleChangeNickname);
        }
    }
}