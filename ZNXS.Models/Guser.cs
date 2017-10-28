using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ZNXS.Models
{
    [Table("Guser")]
    public class Guser : BaseEntity
    {
        [Display(Name = "用户编号"), MaxLength(0x40), Required]
        public string Account { get; set; }

        [Display(Name = "口令"), MaxLength(0x40), Required]
        public string PassWord { get; set; }

        [Display(Name = "用户姓名"), MaxLength(100)]
        public string DisplayName { get; set; }

        public Status Status { get; set; }

        public string Tel { get; set; }

        public string DeptID { get; set; }

        public string OpenID { get; set; }

        public string Roles { get; set; }
    }
}