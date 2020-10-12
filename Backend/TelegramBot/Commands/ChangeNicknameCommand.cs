using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _3dArcheryRepos;
using _3dArcheryRepos.DatabaseContext;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class ChangeNicknameCommand : BaseCommand
    {
        public ChangeNicknameCommand(TelegramBot client) : base(client){}
        public override string Name => CommandName.ChangeNickname;
        public override string[] Aliases => CommandAliases.ChangeNickname;
        protected override UserRole RequiredRole => UserRole.Registered;
        protected override string Description => BotMessages.ChangeNicknameCommandDescription;

        protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>()
        {
            new CommandParameter() {Name = "nickname", Description = "Nickname used"}
        };
        
        protected override async void CustomExecute(string[] args, UserData user)
        {
            using var repos = new ArcheryRepos();
            
            if (repos.CheckIfUserExists(args[0]))
            {
                await Client.SendMessage(user.ChatId, BotMessages.UsernameExists);
                return;
            }

            if (!BotHelper.ValidateNickname(args[0]))
            {
                await Client.SendMessage(user.ChatId, BotMessages.InvalidNickname);
                return;
            }

            repos.UpdateNickname(user, args[0]);
            user.Username = args[0];
            await Client.SendMessage(user.ChatId, BotMessages.ChangeNicknameCommandChangedNick + args[0]);
        }

        protected override async void ConsoleExecute(string[] args, UserData user)
        {
            await Client.SendMessage(user.ChatId, BotMessages.ConsoleChangeNickname);
        }
    }
}