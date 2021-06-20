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

        public async Task<IEnumerable<User>> GetUsersAsync()
        {
            string data = await _context.GetUsersDataAsync().ConfigureAwait(false);
            var users = JsonConvert.DeserializeObject<List<User>>(data);
            return users;
        }
    }
}
