using System.Collections.Generic;
using System.Threading.Tasks;
using _3dArcheryRepos;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public abstract class SetRankCommand : BaseCommand
    {
        protected abstract UserRole SetRole { get; }
        protected abstract string ChangeMessage { get; }

        protected SetRankCommand(TelegramBot client) : base(client){}
        protected override UserRole RequiredRole => UserRole.Console;

        protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>()
        {
            new CommandParameter() {Description = "Name of user which should be promoted", Name = "name"}
        };

        protected override async void CustomExecute(string[] args, UserData user)
        {
            using var repos = new ArcheryRepos();

            var selectedUser = repos.GetUserByName(args[0]);
            if (selectedUser == null)
            {
                await Client.SendMessage(user.ChatId, BotMessages.UserNotExist);
                return;
            }

            if (selectedUser.Role == SetRole)
            {
                await Client.SendMessage(user.ChatId, $"{selectedUser.Username} is already in role {SetRole}");
                return;
            }
            
            repos.SetUserRole(args[0], SetRole);
            await Client.SendMessage(user.ChatId, $"{SetRole} added to user {selectedUser.Username}");
            await Client.SendMessage(selectedUser.ChatId, ChangeMessage);
        }
    }
}