using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using ZNXS.Models;

namespace ZNXS.Contexts
{
    /// <summary>
    ///当前用户的运行环境，不管是登录的用户还是匿名用户，都的一份独立的运行环境，存放在session中
    /// </summary>
    public class UserContext
    {
        /// <summary>
        ///  用户信息的会话ID
        /// </summary>
        private const string ACCOUNT_KEY = "SESSION-ACCOUNT-KEY";

        private const string DEPARTMENT_KEY = "SESSION-DEPARTMENT-KEY";

        private readonly IHttpContextAccessor _httpContextAccessor;

        private ISession _session => _httpContextAccessor.HttpContext.Session;

        /// <summary>
        /// 当前系统登录用户
        /// </summary>
        public Guser user
        {
            get
            {
                if (_session.Get(ACCOUNT_KEY) == null)
                {
                    return null;
                }
                return _session.TryGetValue(ACCOUNT_KEY) as Guser;
            }
            set
            {
                HttpContext.Current.Session[ACCOUNT_KEY] = value;
            }
        }

        /// <summary>
        /// 当前用户所属单位
        /// </summary>
        public static Department department
        {
            get
            {
                if (HttpContext.Current.Session[DEPARTMENT_KEY] == null)
                {
                    return null;
                }

                return HttpContext.Current.Session[DEPARTMENT_KEY] as Department;
            }
            set
            {
                HttpContext.Current.Session[DEPARTMENT_KEY] = value;
            }
        }

        /// <summary>
        /// 系统角色
        /// </summary>
        public static Dictionary<string, string> roles
        {
            get
            {
                return (Dictionary<string, string>)HttpContext.Current.Application["roles"] ?? new Dictionary<string, string>();
            }
        }
    }
}
