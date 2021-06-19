using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace revuze_exam.Classes
{
    public class UsersList
    {
        public int From { get; set; }
        public int To { get; set; }
        public User[] Users{ get; set; }

        public UsersList(int from, int to, User[] users)
        {
            From = from;
            To = to;
            Users = users;
        }
    }
}
