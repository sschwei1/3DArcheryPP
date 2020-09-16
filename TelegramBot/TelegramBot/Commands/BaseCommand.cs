using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Telegram.Bot;
using Telegram.Bot.Types;

namespace TelegramBot.Commands
{
    public enum Commands
    {
        //Test = "test",
        
    }
    public abstract class BaseCommand
    {
        public string Name { get; set; }
        public IEnumerable<CommandParameter> Parameters { get; set; }
        
        public TelegramBot Client { get; set; }
        public UserRole RequiredRole { get; set; }
        public string Description { get; set; }
        
        
        public bool CanExecute(UserData user)
        {
            return user.Role >= RequiredRole;
        }

        protected virtual async Task<bool> CheckExecute(string[] args, UserData user)
        {
            if (!CanExecute(user))
            {
                await Client.SendMessage(user.ChatId, BotMessages.NoPermission);
                return false;
            }

            if (args.Length == 0)
            {
                await Client.SendMessage(user.ChatId, this.Description);
                return false;
            }

            if (args.Length != Parameters.Count())
            {
                await Client.SendMessage(user.ChatId, $"{BotMessages.InvalidAmountOfArgs}\n\n{GetUsageString()}");
                return false;
            }

            return true;
        }
        
        public string GetUsageString()
        {
            return "Correct usage:\n" +
                   $"{Name} {string.Join(" ", this.Parameters.Select(e => $"<{e.Name}>"))}\n" +
                   $"{string.Join("\n", Parameters.Select(e => e.GetInfoString()))}";
        }

        protected abstract void CustomExecute(string[] args, UserData user);

        public virtual async void Execute(string[] args, UserData user)
        {
            if (!await CheckExecute(args, user))
                return;
            
            CustomExecute(args, user);
        }
    }
}