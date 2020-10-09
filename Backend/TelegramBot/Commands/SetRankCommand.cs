using System.Collections.Generic;
using System.Threading.Tasks;
using _3dArcheryRepos;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class SetRankCommand : BaseCommand
    {
        private static readonly Dictionary<UserRole, string> EnumDescriptionMapping = new Dictionary<UserRole, string>() {
            {UserRole.New, "Something went wrong? This should not be possible..."},
            {UserRole.Registered, "Role changed to standard user"},
            {UserRole.Admin, "You are now an Administrator"},
            {UserRole.Console, "?????"}
        };
        
        public SetRankCommand()
        {
            RequiredRole = UserRole.Console;
            Parameters = new List<CommandParameter>()
            {
                new CommandParameter() {Description = "Name of user which should be promoted", Name = "name"}
            };
        }
        
        public UserRole SetRole { get; set; }

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
            await Client.SendMessage(selectedUser.ChatId, EnumDescriptionMapping[SetRole]);
        }
    }
}