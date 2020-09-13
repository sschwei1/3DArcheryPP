using System.Collections.Generic;

namespace TelegramBot.Commands
{
    public abstract class BaseCommand : ICommand
    {
        private List<CommandParameter> _parameters = new List<CommandParameter>();
        public IEnumerable<CommandParameter> Parameters => _parameters;

        public string Command { get; protected set; }
        public TelegramBot Client { get; protected set; }
        public string PermissionRequired { get; protected set; }
        public string Description { get; protected set; }

        public abstract void Execute(string Id);

        public bool CanExecute()
        {
            return true;
        }
    }
}