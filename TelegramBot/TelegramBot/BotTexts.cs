namespace TelegramBot
{
    public static class CommandName
    {
        public const string Test = "/test";
        public const string Start = "/start";
        public const string Help = "/help";
        public const string Commands = "/commands";
    }
    
    public static class BotMessages
    {
        // static messages
        public const string SorryMessage = "We are sorry, this bot was offline when you sent your message, now it should work again.\n\nThank you for your patience!";
        public const string UnknownCommand = "Unknow command entered";
        public const string NoPermission = "You have no permission to execute this command.";
        public const string InvalidAmountOfArgs = "Invalid amount of arguments for command.";

        // help command
        public const string HelpCommandCommandNotFound = "Command was not found\nTry '/commands' for a List of available commands";
        
        // commands command
        public const string CommandsCommandAvailableCommands = "Available commands for you:\n";
        
        // descriptions
        public const string TestCommandDescription = "A fancy test command";
        public const string StartCommandDescription = "Welcome to our 3dArchery bot!\nThis bot is created by 3dium.\n\nFor a list of available commands type 'commands'.\nIf you need help on how to use specific commands, try 'help <command>'\n\nThanks for using our bot!";
        public const string HelpCommandDescription = "The help command shows you how to use other commands.";
        public const string CommandsCommandDescription = "Returns a list of all available commands for user.";
    }
}