using System.Linq;

namespace TelegramBot.Commands
{
    public class ChangeNicknameCommand : BaseCommand
    {
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
            await Client.SendMessage(user.ChatId, BotMessages.ChangeNicknameCommandChangedNick + args[0]);
        }
    }
}