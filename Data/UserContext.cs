using System;
using System.IO;

namespace revuze_exam.Data
{
    public class UserContext : IUserContext
    {
        private const string JSON_FILE_PATH = "Files/users.json";
        public string GetUsersData()
        {
            try
            {
                using (StreamReader r = new StreamReader(JSON_FILE_PATH))
                {
                    return r.ReadToEnd();
                }
            }
            catch (IOException ex)
            {
                Console.WriteLine("Problem with reading the users.json file. Could be wrong path?" + ex);
                return null;
            }
        }
    }
}
