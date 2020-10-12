using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _3dArcheryRepos.ServersideModels;
using Newtonsoft.Json;

namespace TelegramBot.Commands
{
    public abstract class BaseCommand
    {
        protected TelegramBot Client { get; }
        public abstract string Name { get; }
        public virtual string[] Aliases => new string[] { };
        protected abstract IEnumerable<CommandParameter> Parameters { get; }

        protected abstract UserRole RequiredRole { get; }
        protected abstract string Description { get; }

        protected BaseCommand(TelegramBot client)
        {
            this.Client = client;
        }

        protected virtual bool CustomCanExecute(UserData user)
        {
            return user.Role >= RequiredRole;
        }

        public bool CanExecute(UserData user)
        {
            return CustomCanExecute(user) || IsAdmin(user);
        }

        private static bool IsConsole(UserData user)
        {
            return user.Role == UserRole.Console;
        }
        
        private bool IsAdmin(UserData user)
        {
            return user.Role >= UserRole.Admin && user.Role >= RequiredRole;
        }
        
        protected virtual string NoParameterMessage (UserData user) => $"{Description}\n\n{GetUsageString(user)}";

        protected virtual async Task<bool> CheckExecute(string[] args, UserData user)
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

            if (args.Length != Parameters.Count())
            {
                await Client.SendMessage(user.ChatId, $"{BotMessages.InvalidAmountOfArgs}\n\n{GetUsageString(user)}");
                return false;
            }

            return true;
        }
        
        public string GetUsageString(UserData user)
        {
            if (CanExecute(user))
            {
                return "Usage:\n" + 
                       $"/{Name} {string.Join(" ", this.Parameters.Select(e => $"<{e.Name}>"))}" + 
                       (Parameters.Any() ? "\n" : "") + 
                       $"{string.Join("\n", Parameters.Select(e => e.GetInfoString()))}" + 
                       (Aliases.Any() ? "\n\nAliases: " : "") + 
                       $"{string.Join(',', Aliases)}";
            }

            return BotMessages.NoPermission;
        }

        protected abstract void CustomExecute(string[] args, UserData user);

        protected virtual void ConsoleExecute(string[] args, UserData user)
        {
            CustomExecute(args, user);
        }

        public async void Execute(string[] args, UserData user)
        {
            if (!await CheckExecute(args, user))
                return;

            if (IsConsole(user))
                ConsoleExecute(args, user);
            else
                CustomExecute(args, user);
        }
    }
}