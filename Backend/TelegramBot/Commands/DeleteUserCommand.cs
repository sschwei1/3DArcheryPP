using _3dArcheryRepos;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class DeleteUserCommand : BaseCommand
    {
        protected override async void CustomExecute(string[] args, UserData user)
        {
            using var repos = new ArcheryRepos();
            repos.DeactivateUser(user.ChatId);
            await Client.SendMessage(user.ChatId, BotMessages.DeactivateUserMessage);
        }
    }
}