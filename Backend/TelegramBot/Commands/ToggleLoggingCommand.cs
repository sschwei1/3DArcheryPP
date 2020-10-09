using System.Threading.Tasks;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class ToggleLoggingCommand : BaseCommand
    {
        private const string Off = "off";
        private const string On = "on";

        protected override string NoParameterMessage (UserData user) => $"Logging is currently {(Client.LoggingEnabled ? On : Off)}";

        protected override async Task CustomExecute(string[] args, UserData user)
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