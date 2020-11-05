using _3dArcheryRepos;
using _3dArcheryRepos.ServersideModels;
using System;
using System.Collections.Generic;
using System.Text;
using Telegram.Bot.Types;

namespace TelegramBot.Commands
{
    class DeclineEventCommand : BaseCommand
    {
       
            public DeclineEventCommand(TelegramBot client) : base(client) { }
            public override string Name => CommandName.DeclineEvent;
            protected override UserRole RequiredRole => UserRole.Registered;
            protected override string Description => BotMessages.DeclineEventDescription;
            protected override IEnumerable<CommandParameter> Parameters => new List<CommandParameter>();

            protected override async void CustomExecute(string[] args, UserData user)
            {
                using var repos = new ArcheryRepos();


                if (!repos.UserHasInviteDecline(user.ChatId))
                {
                    await Client.SendMessage(user.ChatId, BotMessages.AcceptEventNoInvite);
                    return;
                }

                if (repos.DeclineEvent(user))
                {
                    await Client.SendMessage(user.ChatId, BotMessages.DeclineEventSuccess);
                }
                else
                {
                    await Client.SendMessage(user.ChatId, BotMessages.DeclineEventFailed);
                }
            }
        }
    }

