using System.Collections.Generic;
using System.Threading.Tasks;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class ToggleLoggingCommand : BaseCommand
    {
        private const string Off = "off";
        private const string On = "on";
        
        public ToggleLoggingCommand(TelegramBot client) : base(client){}
        public override string Name => CommandName.ToggleLogging;
        public override string[] Aliases => CommandAliases.ToggleLogging;
        protected override UserRole RequiredRole => UserRole.Console;
        protected override string Description => BotMessages.ToggleLoggingDescription;

        protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>()
        {
            new CommandParameter() {Description = "Logging status which should be toggled to", Name = "status"}
        };

        protected override string NoParameterMessage (UserData user) => $"Logging is currently {(Client.LoggingEnabled ? On : Off)}";

        protected override async void CustomExecute(string[] args, UserData user)
        {
            string logMessage;

            switch (args[0].ToLower())
            {
                case Off:
                    Client.LoggingEnabled = false;
                    logMessage = "Logging disabled.";
                    break;
                case On:
                    Client.LoggingEnabled = true;
                    logMessage = "Logging enabled.";
                    break;
                default:
                    logMessage = $"Invalid argument, use either {On} or {Off}.";
                    break;
            }

            await Client.SendMessage(user.ChatId, logMessage);
        }
    }
}