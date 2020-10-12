using System.Collections.Generic;
using System.Threading.Tasks;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class WebsiteCommand : BaseCommand
    {
        public WebsiteCommand(TelegramBot client) : base(client){}
        public override string Name => CommandName.Website;
        protected override UserRole RequiredRole => UserRole.New;
        protected override string Description => BotMessages.WebsiteCommandDescription;
        protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>();
        
        protected override async void CustomExecute(string[] args, UserData user)
        {
            await Client.SendMessage(user.ChatId, this.Description);
        }
    }
}