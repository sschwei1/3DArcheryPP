using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class CommandsCommand : BaseCommand
    { 
        public CommandsCommand(TelegramBot client) : base(client){}
        public override string Name => CommandName.Commands;
        public override string[] Aliases => CommandAliases.Commands;
        protected override UserRole RequiredRole => UserRole.New;
        protected override string Description => BotMessages.CommandsCommandDescription;
        protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>();
        
        protected override async void CustomExecute(string[] args, UserData user)
        {
            var availableCommands = Client.CommandManager.Commands
                .Where(e => e.CanExecute(user))
                .Select(e => e.Name)
                .ToList();

            var msg = $"{BotMessages.CommandsCommandAvailableCommands}/{string.Join("\n/", availableCommands)}";
            await Client.SendMessage(user.ChatId, msg);
        }
    }
}