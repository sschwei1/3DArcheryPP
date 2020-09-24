using System.Linq;
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
            if (Client.Users.Any(e => e.Username == args[0]))
            {
                await Client.SendMessage(user.ChatId, BotMessages.UserExists);
                return;
            }

            if (!BotHelper.ValidateNickname(args[0]))
            {
                await Client.SendMessage(user.ChatId, BotMessages.InvalidNickname);
                return;
            }

            user.Username = args[0];
            user.Role = UserRole.Registered;
            await Client.SendMessage(user.ChatId, BotMessages.RegisterCommandRegistered + args[0]);
        }
    }
}