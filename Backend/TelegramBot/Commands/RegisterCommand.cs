using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _3dArcheryRepos;
using _3dArcheryRepos.ServersideModels;
using Telegram.Bot;

namespace TelegramBot.Commands
{
    public class RegisterCommand : BaseCommand
    {
        public RegisterCommand(TelegramBot client) : base(client){}
        public override string Name => CommandName.Register;
        protected override UserRole RequiredRole => UserRole.New;
        protected override string Description => BotMessages.RegisterCommandDescription;
        protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>()
        {
            new CommandParameter() {Name = "nickname", Description = "Nickname used"}
        };

        protected override bool CustomCanExecute(UserData user)
        {
            return user.Role == RequiredRole;
        }

        protected override async void ConsoleExecute(string[] args, UserData user)
        {
            await Client.SendMessage(user.ChatId, BotMessages.ConsoleRegister);
        }

        protected override async void CustomExecute(string[] args, UserData user)
        {
            using var repos = new ArcheryRepos();

            if (user.Role != UserRole.New)
            {
                await Client.SendMessage(user.ChatId, BotMessages.AlreadyRegistered);
                return;
            }
            
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

            repos.RegisterUser(user, args[0]);
            await Client.SendMessage(user.ChatId, BotMessages.RegisterCommandRegistered + args[0]);
        }
    }
}