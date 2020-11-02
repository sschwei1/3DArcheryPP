using System.Runtime.Serialization.Json;
using TelegramBot.Commands;

namespace TelegramBot
{
    public static class CommandName
    {
        public const string ListUser = "listUser";
        public const string Start = "start";
        public const string Help = "help";
        public const string Commands = "commands";
        public const string Register = "register";
        public const string ChangeNickname = "changeNickname";
        public const string Website = "website";
        public const string ToggleLogging = "toggleLogging";
        public const string MakeAdmin = "makeAdmin";
        public const string RemoveAdmin = "removeAdmin";
        public const string Broadcast = "broadcast";
        public const string DeactivateUser = "deactivate";
        public const string Aliases = "aliases";
        public const string CreateEvent = "createEvent";
        public const string AbortEvent = "abortEvent";
        public const string AcceptEvent = "accept";
    }

    public static class CommandAliases
    {
        public static readonly string[] ListUser = {"list"};
        public static readonly string[] Commands = {"cmd"};
        public static readonly string[] ChangeNickname = {"nick"};
        public static readonly string[] ToggleLogging = {"toggle"};
        public static readonly string[] MakeAdmin = {"op", "madmin"};
        public static readonly string[] RemoveAdmin = {"deop", "muser"};
        public static readonly string[] Broadcast = {"bc"};
        public static readonly string[] Aliases = {"alias"};
        public static readonly string[] CreateEvent = {"cevt"};
        public static readonly string[] AcceptEvent = { "ac" };
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
        public const string CommandCommandNotFound = "Command was not found\nTry '/commands' for a List of available commands";
        public const string NoAliasesString = "No aliases found for ";
        
        // commands command
        public const string CommandsCommandAvailableCommands = "Available commands for you:\n";
        
        // register command
        public const string AlreadyRegistered = "You are already registered.";
        public const string RegisterCommandRegistered = "Successfully registered as ";
        
        // change nickname command
        public const string ChangeNicknameCommandChangedNick = "Nickname changed to: ";
        
        // setRole message
        public const string MakeAdminRoleChangeMessage = "You are now an Administrator";
        public const string RemoveAdminRoleChangeMessage = "You are no longer an Administrator";
        
        // bc command
        public const string BroadcastSent = "Broadcast sent successfully";
        
        // deactivate user command
        public const string DeactivateUserMessage = "Your account was successfully deactivated, if you wish to participate in further events, just register again.\nThank you for using our tool!";

        // console returns
        public const string ConsoleChangeNickname = "Console nick can't be changed.";
        public const string ConsoleRegister = "Console can't register as user.";
        public const string ConsoleDeactivate = "Console can't be deactivated.";

        // create event
        public const string CreateEventNotFound = "Event with this code does not exist";
        public const string CreateUserHasEvent = "You already have a registered event, if you don't know about it, use /abortEvent";
        public const string CreateEventSuccess = "Event successfully binded to you";

        // abort event
        public const string AbortEventNoEvent = "You have no event which could be aborted.";
        public const string AbortEventSuccess = "Successfully aborted your event";

        // accept user
        public const string AcceptEventNoInvite = "You have no invite to an event";
        public const string AcceptEventSuccess = "You are now a member of the event";
        public const string AcceptEventFailed = "There was an error acceptiong the event, try again later";

        // descriptions
        public const string ListUserCommandDescription = "Prints a list of all users who wrote a message to the bot.";
        public const string StartCommandDescription = "########\nOur project is still in development feel free to register and help us out as a tester!\n########\n\nWelcome to our 3dArchery bot!\nThis bot is created by 3dium.\n\nYou can register yourself by sending following command: 'register <username>'\nThis will enable you to be signed up for events and gives you access to more commands.\n\nFor a list of available commands type 'commands'.\nIf you need help on how to use specific commands, try 'help <command>'\n\nThanks for using our bot!";
        public const string HelpCommandDescription = "The help command shows you how to use other commands.";
        public const string CommandsCommandDescription = "Returns a list of all available commands for user.";
        public const string RegisterCommandDescription = "Register yourself in our 3dArchery program with a username.";
        public const string ChangeNicknameCommandDescription = "Change your nickname, used in Events";
        public const string WebsiteCommandDescription = "Our website:\nhttp://3dium.digital";
        public const string ToggleLoggingDescription = "Toggles weather messages are logged or not";
        public const string MakeAdminCommandDescription = "Promotes user to admin.";
        public const string RemoveAdminCommandDescription = "Promotes user to admin.";
        public const string BroadcastCommandDescription = "Sends a message to all users.";
        public const string DeactivateUserCommandDescription = "Deactivate your user, so you will not receive any more messages. If you want to activate your account again, just register again.";
        public const string AliasesCommandDescription = "Returns a list of all aliases for a command.";
        public const string CreateEventDescription = "Bind your user to an event via it's eventCode";
        public const string AbortEventDescription = "Abort the event you are binded to";
        public const string AcceptEventDescription = "Accept event invite";
    }
}