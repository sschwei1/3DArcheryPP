using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

namespace _3dArcheryRepos.Helper
{
    public static class StringHelper
    {
        public static bool IsEqual(string str1, string str2)
        {
            return string.Equals(str1, str2, StringComparison.OrdinalIgnoreCase);
        }

        public static bool Contains(string str, string phrase)
        {
            return str.IndexOf(phrase, StringComparison.OrdinalIgnoreCase) >= 0;
        }
    }
}
