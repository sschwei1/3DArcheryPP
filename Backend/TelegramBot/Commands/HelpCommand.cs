using System.Collections.Generic;
using System.Threading.Tasks;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class HelpCommand : BaseCommand
    {
        public HelpCommand(TelegramBot client) : base(client){}
        public override string Name => CommandName.Help;
        protected override UserRole RequiredRole => UserRole.New;
        protected override string Description => BotMessages.HelpCommandDescription;
        protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>()
        {
            new CommandParameter() {Name = "command", Description = "Command you need help with."}
        };
        
        protected override async void CustomExecute(string[] args, UserData user)
        {
            args[0] = BotHelper.FixCommandString(args[0]);
            
            if (Client.CommandManager.TryGetCommand(args[0], out BaseCommand command))
                await Client.SendMessage(user.ChatId, command.GetUsageString(user));
            else
                await Client.SendMessage(user.ChatId, BotMessages.HelpCommandCommandNotFound);
        }
    }
}