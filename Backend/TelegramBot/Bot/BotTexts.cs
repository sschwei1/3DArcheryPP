namespace TelegramBot
{
    public static class CommandName
    {
        public const string ListUser = "/list";
        public const string Start = "/start";
        public const string Help = "/help";
        public const string Commands = "/commands";
        public const string Register = "/register";
        public const string ChangeNickname = "/nick";
        public const string Website = "/website";
        public const string ToggleLogging = "/logging";
        public const string MakeAdmin = "/op";
        public const string RemoveAdmin = "/deop";
        public const string Broadcast = "/bc";
    }
    
    public static class BotMessages
    {
        // static messages
        public const string SorryMessage = "We are sorry, this bot was offline when you sent your message, now it should work again.\n\nThank you for your patience!";
        public const string UnknownCommand = "Unknow command entered";
        public const string NoPermission = "You have no permission to execute this command.";
        public const string InvalidAmountOfArgs = "Invalid amount of arguments for command.";
        public const string UsernameExists = "This username is already in use.\nTry to use a different one.";
        public const string InvalidNickname = "Invalid nickname entered\nA nickname needs to match following conditions:\n - needs to be alphanumeric\n - minimum 3 characters\n - maximum 15 characters";
        public const string UserNotExist = "This user does not exist.";

        // help command
        public const string HelpCommandCommandNotFound = "Command was not found\nTry '/commands' for a List of available commands";
        
        // commands command
        public const string CommandsCommandAvailableCommands = "Available commands for you:\n";
        
        // register command
        public const string AlreadyRegistered = "You are already registered.";
        public const string RegisterCommandRegistered = "Successfully registered as ";
        
        // change nickname command
        public const string ChangeNicknameCommandChangedNick = "Nickname changed to: ";
        
        // bc command
        public const string BroadcastSent = "Broadcast sent successfully";

        // console returns
        public const string ConsoleChangeNickname = "Console nick can't be changed.";
        public const string ConsoleRegister = "Console can't register as user.";
        
        // descriptions
        public const string ListUserCommandDescription = "Prints a list of all users who wrote a message to the bot.";
        public const string StartCommandDescription = "########\nOur project is still in development feel free to register and help us out as a tester!\n########\n\nWelcome to our 3dArchery bot!\nThis bot is created by 3dium.\n\nYou can register yourself by sending following command: 'register <username>'\nThis will enable you to be signed up for events and gives you access to more commands.\n\nFor a list of available commands type 'commands'.\nIf you need help on how to use specific commands, try 'help <command>'\n\nThanks for using our bot!";
        public const string HelpCommandDescription = "The help command shows you how to use other commands.";
        public const string CommandsCommandDescription = "Returns a list of all available commands for user.";
        public const string RegisterCommandDescription = "Register yourself in our 3dArchery program with a username.";
        public const string ChangeNicknameCommandDescription = "Change your nickname, used in Events";
        public const string WebsiteCommandDescription = "Our website:\nhttp://sswe.me\n(will change to pp.sswe.me once our actual webserver is set up)";
        public const string ToggleLoggingDescription = "Toggles weather messages are logged or not";
        public const string MakeAdminCommandDescription = "Promotes user to admin.";
        public const string RemoveAdminCommandDescription = "Promotes user to admin.";
        public const string BroadcastCommandDescription = "Sends a message to all users.";
    }
}