using System;
using System.IO;
using System.Threading.Tasks;

namespace revuze_exam.Data
{
    public class UserContext : IUserContext
    {
        private const string JSON_FILE_PATH = "Files/users.json";
        public async Task<string> GetUsersDataAsync()
        {
            try
            {
                using (StreamReader r = new StreamReader(JSON_FILE_PATH))
                {
                    return await r.ReadToEndAsync().ConfigureAwait(false);
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
