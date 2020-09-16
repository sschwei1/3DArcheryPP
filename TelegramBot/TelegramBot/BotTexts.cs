namespace TelegramBot
{
    public static class CommandName
    {
        public const string Test = "/test";
        public const string Start = "/start";
        public const string Help = "/help";
        public const string Commands = "/commands";
        public const string Register = "/register";
        public const string ChangeNickname = "/nick";
    }
    
    public static class BotMessages
    {
        // static messages
        public const string SorryMessage = "We are sorry, this bot was offline when you sent your message, now it should work again.\n\nThank you for your patience!";
        public const string UnknownCommand = "Unknow command entered";
        public const string NoPermission = "You have no permission to execute this command.";
        public const string InvalidAmountOfArgs = "Invalid amount of arguments for command.";
        public const string UserExists = "This username is already in use.\nTry to use a different one.";

        // help command
        public const string HelpCommandCommandNotFound = "Command was not found\nTry '/commands' for a List of available commands";
        
        // commands command
        public const string CommandsCommandAvailableCommands = "Available commands for you:\n";
        
        // register command
        public const string RegisterCommandRegistered = "Successfully registered as ";
        
        // change nickname command
        public const string ChangeNicknameCommandChangedNick = "Nickname changed to:";
        
        // descriptions
        public const string TestCommandDescription = "A fancy test command";
        public const string StartCommandDescription = "Welcome to our 3dArchery bot!\nThis bot is created by 3dium.\n\nFor a list of available commands type 'commands'.\nIf you need help on how to use specific commands, try 'help <command>'\n\nThanks for using our bot!";
        public const string HelpCommandDescription = "The help command shows you how to use other commands.";
        public const string CommandsCommandDescription = "Returns a list of all available commands for user.";
        public const string RegisterCommandDescription = "Register yourself in our 3dArchery program with a username.";
        public const string ChangeNicknameCommandDescription = "Change your nickname, used in Events";
    }
}