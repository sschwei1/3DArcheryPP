using System;
using System.Collections.Generic;
using System.Linq;
using _3dArcheryRepos.DatabaseContext;
using _3dArcheryRepos.ServersideModels;
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
            var user = GetUserByChatId(id);

            if (user == null) return false;

            user.Username = string.Empty;
            user.Role = UserRole.New;
            return true;
        }

        public void Dispose()
        {
            Db.Dispose();
        }
    }
}