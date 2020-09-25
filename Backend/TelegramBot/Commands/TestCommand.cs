using System.Linq;

namespace TelegramBot.Commands
{
    public class TestCommand : BaseCommand
    {
        protected override async void CustomExecute(string[] args, UserData user)
        {
            var msg = $"{string.Join("\n", Client.Users.Select(e => $"{e.ChatId}->{e.Username}"))}";
            await Client.SendMessage(user.ChatId, msg);
        }
    }
}