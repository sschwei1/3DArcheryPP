namespace TelegramBot.Commands
{
    public class TestCommand : BaseCommand
    {
        public TestCommand()
        {
            Description = "Just a test command";
            
        }
        
        public override void Execute(string Id)
        {
            if (!CanExecute())
            {
                
            }
        }
    }
}