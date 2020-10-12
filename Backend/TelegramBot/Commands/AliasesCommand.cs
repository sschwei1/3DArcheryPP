using System.Collections.Generic;
using _3dArcheryRepos.ServersideModels;

namespace TelegramBot.Commands
{
    public class AliasesCommand : BaseCommand
    {
        public AliasesCommand(TelegramBot client) : base(client){}

        public override string Name => CommandName.Aliases;
        public override string[] Aliases => CommandAliases.Aliases;
        protected override UserRole RequiredRole => UserRole.New;
        protected override string Description => BotMessages.AliasesCommandDescription;
        protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>()
        {
            new CommandParameter(){Name = "command", Description = "Command which aliases should be returned."}
        };

        protected override async void CustomExecute(string[] args, UserData user)
        {
            args[0] = BotHelper.FixCommandString(args[0]);
            
            if (Client.CommandManager.TryGetCommand(args[0], out BaseCommand command))
                await Client.SendMessage(user.ChatId, command.GetAliasesString(user));
            else
                await Client.SendMessage(user.ChatId, BotMessages.CommandCommandNotFound);
        }
    }
}