using revuze_exam.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace revuze_exam.Repositories
{
    public interface IUserRepository
    {
        IEnumerable<User> GetUsers();
        Task<User> GetUser();
    }
}
