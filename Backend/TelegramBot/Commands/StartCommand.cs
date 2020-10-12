using System.Collections.Generic;
using System.Threading.Tasks;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class StartCommand : BaseCommand
    {
        public StartCommand(TelegramBot client) : base(client){}
        public override string Name => CommandName.Start;
        protected override UserRole RequiredRole => UserRole.New;
        protected override string Description => BotMessages.StartCommandDescription;
        protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>();
        
        protected override async void CustomExecute(string[] args, UserData user)
        {
            await Client.SendMessage(user.ChatId, this.Description);
        }
    }
}