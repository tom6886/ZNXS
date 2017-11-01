using Microsoft.AspNetCore.Http;
using System.IO;
using System.Text.RegularExpressions;

namespace ZNXS.Utils
{
    public class SiteUtils
    {
        private static readonly IHttpContextAccessor _httpContextAccessor;

        private static HttpRequest _request => _httpContextAccessor.HttpContext.Request;

        /// <summary>
        /// 当前设备是否是移动端
        /// </summary>
        /// <returns></returns>
        public static bool isMobile()
        {
            string u = _request.Headers["User-Agent"].ToString();
            Regex b = new Regex(@"(android|bb\d+|meego)|mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino", RegexOptions.IgnoreCase | RegexOptions.Multiline);
            return b.IsMatch(u);

        }

        /// <summary>
        /// 日志文本
        /// </summary>
        /// <param name="txt"></param>
        public static void log(string txt)
        {
            using (StreamWriter sw = new StreamWriter(@"E:\log.txt", true))
            {
                sw.WriteLine(txt);
            }
        }
    }
}