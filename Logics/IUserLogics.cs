
using revuze_exam.Classes;
using revuze_exam.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace revuze_exam.Logics
{
    public interface IUserLogics
    {
        Task<UsersList> GetUsersListByQuarterAsync(EQuarter quarter);
    }
}
