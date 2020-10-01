using System.Linq;
using _3dArcheryRepos;
using _3dArcheryRepos.DatabaseContext;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class ChangeNicknameCommand : BaseCommand
    {
        protected override async void CustomExecute(string[] args, UserData user)
        {
            using var repos = new ArcheryRepos();
            
            if (repos.CheckIfUserExists(args[0]))
            {
                await Client.SendMessage(user.ChatId, BotMessages.UserExists);
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
    }
}