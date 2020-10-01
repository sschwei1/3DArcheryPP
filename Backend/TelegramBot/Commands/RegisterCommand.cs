using System.Linq;
using _3dArcheryRepos;
using _3dArcheryRepos.ServersideModels;
using Telegram.Bot;

namespace TelegramBot.Commands
{
    public class RegisterCommand : BaseCommand
    {
        public override bool CanExecute(UserData user)
        {
            return user.Role == RequiredRole;
        }
        
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

            repos.RegisterUser(user, args[0]);
            await Client.SendMessage(user.ChatId, BotMessages.RegisterCommandRegistered + args[0]);
        }
    }
}