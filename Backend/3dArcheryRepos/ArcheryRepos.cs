using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Runtime.CompilerServices;
using _3dArcheryRepos.DatabaseContext;
using _3dArcheryRepos.Helper;
using _3dArcheryRepos.ServersideModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;

namespace _3dArcheryRepos
{
    public class ArcheryRepos : IDisposable
    {
        public ArcheryDb Db { get; set; }

        public ArcheryRepos()
        {
            this.Db = new ArcheryDb();
        }

        public UserData GetUserByChatId(long chatId)
        {
            var user = Db.Users.SingleOrDefault(e => e.ChatId == chatId) ?? CreateUser(chatId);

            return new UserData()
            {
                Role = (UserRole)user.Role,
                Username = user.Username,
                ChatId = chatId
            };
        }

        private DbUser CreateUser(long chatId)
        {
            var user = new DbUser()
            {
                Role = (int) UserRole.New,
                Username = null,
                ChatId = chatId
            };

            Db.Users.Add(user);
            Db.SaveChanges();

            return user;
        }

        public bool CheckIfUserExists(string username)
        {
            return Db.Users.FirstOrDefault(e => e.Username == username) != null;
        }

        public IEnumerable<UserData> GetAllUsers()
        {
            return Db.Users.Select(e => new UserData()
            {
                Role = (UserRole)e.Role,
                Username = e.Username,
                ChatId = e.ChatId
            });
        }

        public UserData GetUserByName(string name)
        {
            var user = Db.Users.SingleOrDefault(e => e.Username == name);

            if (user == null)
                return null;

            return new UserData()
            {
                Role = (UserRole)user.Role,
                Username = user.Username,
                ChatId = user.ChatId
            };
        }

        public bool UpdateNickname(UserData user, string newUsername)
        {
            var dbUser = Db.Users.SingleOrDefault(e => e.ChatId == user.ChatId);
            if (dbUser == null) return false;

            dbUser.Username = newUsername;
            Db.SaveChanges();
            return true;
        }

        public bool RegisterUser(UserData user, string username)
        {
            var dbUser = Db.Users.SingleOrDefault(e => e.ChatId == user.ChatId);
            if (dbUser == null) return false;

            dbUser.Role = (int)UserRole.Registered;
            dbUser.Username = username;
            dbUser.Token = StringHelper.RandomString(32);
            Db.SaveChanges();
            return true;
        }

        public bool SetUserRole(string username, UserRole role)
        {
            var dbUser = Db.Users.SingleOrDefault(e =>
                string.Equals(e.Username, username, StringComparison.CurrentCultureIgnoreCase));

            if (dbUser == null)
                return false;

            dbUser.Role = (int) role;
            Db.SaveChanges();
            return true;
        }

        public bool DeactivateUser(long id)
        {
            var user = Db.Users.SingleOrDefault(e => e.ChatId == id);

            if (user == null) return false;

            user.Username = null;
            user.Role = (int) UserRole.New;
            Db.SaveChanges();
            return true;
        }

        public bool CreateTrack(CreateTrackModel trackData)
        {
            var track = new DbTrack()
            {
                LocationId = trackData.LocationId,
                Name = trackData.Name,
                CreationDate = DateTime.UtcNow
            };

            Db.Tracks.Add(track);

            Db.SaveChanges();
            return true;
        }

        public bool CreateLocation(CreateLocationModel locationData)
        {
            var location = new DbLocation()
            {
                Name = locationData.Name

            };

            Db.Locations.Add(location);

            Db.SaveChanges();
            return true;
        }

        public IEnumerable<TrackMinModel> GetTrackFiltered(int filterFrom, int filterTo, string filterName, string filterLocation)
        {
            var trackList = Db.Tracks
                .Where(e =>
                    (string.IsNullOrWhiteSpace(filterLocation) || e.Location.Name.ToLower().Contains(filterLocation.ToLower())) &&
                    (string.IsNullOrWhiteSpace(filterName) || e.Name.ToLower().Contains(filterName.ToLower())))
                .OrderBy(e => e.CreationDate)
                .Skip(filterFrom)
                .Take(filterTo)
                .Select(e => new TrackMinModel()
                {
                    Id = e.Id,
                    Name = e.Name,
                    TargetCount = Db.TrackTargets.Where(x => x.TrackId == e.Id).Count(),
                    Location = new LocationModel()
                    {
                        Id = e.Location.Id,
                        Name = e.Location.Name
                    }
                });
            return trackList;
        }

        public int CreateEvent(CreateEventModel evt)
        {
            var evnt = new DbEvent()
            {
                Name = evt.Name,
                CreationDate = evt.CreationDate,
                EventCode = evt.EventCode.ToString(),
                TrackId = evt.TrackId,
                CountTypeId = evt.CountTypeId,
            };

            Db.Events.Add(evnt);

            Db.SaveChanges();


            return evnt.Id;
        }

        public bool UserHasEvent(long chatId)
        {
            var events = Db.Events.Where(e => e.Owner.ChatId == chatId && e.EndDate == null);
            return events.Count() != 0;
        }

       public bool EventCodeExists(string eventCode)
        {
            var events = Db.Events.Where(e => e.EventCode == eventCode && e.EndDate == null);
            return events.Count() != 0;
        }

        public bool AddOwnerToEvent (long chatId, string eventCode)
        {
            var evt = Db.Events.SingleOrDefault(e => e.EventCode == eventCode && e.EndDate == null);
            var usr = Db.Users.SingleOrDefault(e => e.ChatId == chatId);

            if(evt != null && usr != null)
            {
                evt.OwnerId = usr.Id;

                Db.SaveChanges();
                return true;
            }

            return false;
        }

        public bool AbortEvent(UserData user)
        {

            var usr = Db.Users.SingleOrDefault(e => e.ChatId == user.ChatId);
            var evt = Db.Events.SingleOrDefault(e => e.OwnerId == usr.Id && e.EndDate == null);


            Db.Events.Remove(evt);


                Db.SaveChanges();
                return true;

        }


        public IEnumerable<GetUserFilteredModel> GetUserFiltered(int filterFrom, int filterTo, string filterName, int[] except)
        {
            var userList = (
                from usr in Db.Users
                join eu in Db.EventUsers on usr.Id equals eu.UserId into joinTbl
                from evtUsr in joinTbl.DefaultIfEmpty()
                where string.IsNullOrEmpty(filterName) || usr.Username.ToLower().Contains(filterName.ToLower())
                where except == null || !except.Contains(usr.Id)
                where usr.Role != (int) UserRole.New
                where evtUsr == null || (evtUsr.HasAccepted && evtUsr.Event.EndDate != null)
                orderby usr
                select usr)
                .Skip(filterFrom).Take(filterTo)
                .Select(e => new GetUserFilteredModel()
                {
                    Id = e.Id,
                    Username = e.Username
                });

            return userList;
        }

        public IEnumerable<int> AddEventUsers (List<int> users, int eventId)
        {
            var evtUsers = users.Select(usrId => new DbEventUser()
            {
                UserId = usrId,
                EventId = eventId,
                HasAccepted = false
            });

            Db.EventUsers.AddRange(evtUsers);

            Db.SaveChanges();


            return evtUsers.Select(e => e.UserId);
        }

        public IEnumerable<long> GetChatIdsFromUserIds(IEnumerable<int> userId)
        {
            return Db.Users.Where(e => userId.Contains(e.Id)).Select(e => e.ChatId);
        }


        public bool UserHasInvite(long chatId)
        {
            var user = Db.Users.SingleOrDefault(e => e.ChatId == chatId);

            var invites = Db.EventUsers.Include(e => e.Event).SingleOrDefault(e => e.UserId == user.Id && e.HasAccepted == false && e.Event.StartTime == null);
            return invites != null;
        }

        public bool AcceptEvent(UserData user)
        {
            var usr = Db.Users.SingleOrDefault(e => e.ChatId == user.ChatId);

            var evtusr = Db.EventUsers.Include(e =>e.Event).SingleOrDefault(e => e.UserId == usr.Id && e.Event.StartTime == null);


            if (evtusr != null)
            {
                evtusr.HasAccepted=true;

                Db.SaveChanges();
                return true;
            }

            return false;


        }

        public bool UserIsOwner(long chatId)
        {
            var user = Db.Users.SingleOrDefault(e => e.ChatId == chatId);

            var owner = Db.Events.Where(e => e.Owner.ChatId == chatId && e.EndDate == null);
            return owner.Count() != 0;
        }

        public DbUser GenerateShortToken(UserData user)
        {
            var usr = Db.Users.SingleOrDefault(e => e.ChatId == user.ChatId);

           

            if (usr != null)
            {
                usr.ShortToken = StringHelper.RandomString(6);

                Db.SaveChanges();
                return usr;
            }
            return null;
        }

        public string GetToken(string shortToken)
        {
            string token = Db.Users
               .SingleOrDefault(e =>
                   e.ShortToken.ToLower() == shortToken.ToLower()
                   )?.Token??"";
              
               

            return token;
        }

        public void Dispose()
        {

            Db.Dispose();
        }
    }
}
