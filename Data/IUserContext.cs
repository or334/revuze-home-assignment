using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace revuze_exam.Data
{
    public interface IUserContext
    {
        Task<string> GetUsersDataAsync();
    }
}
