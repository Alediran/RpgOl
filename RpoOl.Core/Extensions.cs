using System.Text;

namespace System
{
    /// <summary>
    /// Extension for String class
    /// </summary>
    public static class StringExtensions
    {
        /// <summary>
        /// Removes last found instance of character
        /// </summary>
        /// <param name="postFixes">Character/s to remove</param>
        /// <returns></returns>
        public static string RemovePostFix(this string str, params string[] postFixes)
        {
            var result = str;

            foreach(var character in postFixes) {
                int place = str.LastIndexOf(character);

                if (place > -1) result = result.Remove(place, character.Length); 
            }

            return result;
        }
    }
}
