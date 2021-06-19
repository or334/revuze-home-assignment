using revuze_exam.Classes;
using revuze_exam.Enum;
using revuze_exam.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace revuze_exam.Logics
{
    public class UserLogics : IUserLogics
    {
        private readonly IUserRepository _repository;
        public UserLogics(IUserRepository repository)
        {
            _repository = repository;
        }
        public UsersList GetUsersListByQuarter(EQuarter quarter)
        {
            var users = _repository.GetUsers();
            return SortUsersByQuarter(users, quarter);
        }

        private UsersList SortUsersByQuarter(IEnumerable<User> users, EQuarter quarter)
        {
            switch (quarter)
            {
                case EQuarter.First:
                        return MakeUsersLists(1, 3, users);
                case EQuarter.Second:
                        return MakeUsersLists(4, 6, users);
                case EQuarter.Third:
                        return MakeUsersLists(7, 9, users);
                case EQuarter.Fourth:
                        return MakeUsersLists(10, 12, users);
            }
            return null;
        }

        private UsersList MakeUsersLists (int from, int to, IEnumerable<User> users)
        {
            var usersByQuarter = users.Where(u => u.Date.Month >= from && u.Date.Month <= to).OrderBy(u => u.Name.Split(' ').Last()).ToArray();
            UsersList usersList = new UsersList(from, to, usersByQuarter);
            return usersList;
        }
    }
}