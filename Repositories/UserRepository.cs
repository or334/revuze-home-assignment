using Newtonsoft.Json;
using revuze_exam.Classes;
using revuze_exam.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace revuze_exam.Repositories
{
    public class UserRepository : IUserRepository 
    {
        private readonly IUserContext _context;
        public UserRepository(IUserContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }
        public Task<User> GetUser()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetUsers()
        {
            string data = _context.GetUsersData();
            var users = JsonConvert.DeserializeObject<List<User>>(data);
            return users;
        }
    }
}
