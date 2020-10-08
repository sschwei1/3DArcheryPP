namespace _3dArcheryRepos.ServersideModels
{
    public enum UserRole
    {
        New = 0,
        Registered = 1,
        Admin = 10,
        Console = 11
    }
    
    public class UserData
    {
        public long ChatId { get; set; }
        public string Username { get; set; }
        public UserRole Role { get; set; }

        public bool IsConsole => Role == UserRole.Console;
    }
}