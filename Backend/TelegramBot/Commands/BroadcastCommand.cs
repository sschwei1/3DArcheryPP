using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _3dArcheryRepos;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class BroadcastCommand : BaseCommand
    {
        public BroadcastCommand(TelegramBot client) : base(client){}
        public override string Name => CommandName.Broadcast;
        public override string[] Aliases => CommandAliases.Broadcast;
        protected override UserRole RequiredRole => UserRole.Admin;
        protected override string Description => BotMessages.BroadcastCommandDescription;
        protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>()
        {
            new CommandParameter() {Description = "Message which is sent", Name = "Message"}
        };
        
        protected override async Task<bool> CheckExecute(string[] args, UserData user)
        {
            if (!CanExecute(user))
            {
                await Client.SendMessage(user.ChatId, BotMessages.NoPermission);
                return false;
            }

            if (args.Length == 0 && Parameters.Count() != 0)
            {
                await Client.SendMessage(user.ChatId, NoParameterMessage(user));
                return false;
            }

            return true;
        }
        
        protected override async void CustomExecute(string[] args, UserData user)
        {
            using var repos = new ArcheryRepos();
            
            var users = repos.GetAllUsers().Where(e => e.Role > UserRole.New);
            var bcMessage = string.Join(' ', args);
            var builder = new StringBuilder();
            Parallel.ForEach(users, async usr =>
            {
                if (Equals(usr, Client.ConsoleUser) || Equals(usr, user)) return;
                builder.Append($"Broadcast sent to: {usr.Username}\n");
                await Client.SendMessage(usr.ChatId, $"Broadcast by {user.Username}:\n{bcMessage}");
            });

            await Client.SendMessage(user.ChatId, BotMessages.BroadcastSent);
            builder.Remove(builder.Length - 1, 1);
            BotHelper.LogMessage(builder.ToString(), Client.ConsoleCommandBuilder); 
        }
    }
}