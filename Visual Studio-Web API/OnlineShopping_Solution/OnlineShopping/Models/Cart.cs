//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace OnlineShopping.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Cart
    {
        public int Cart_Id { get; set; }
        public Nullable<int> User_Id { get; set; }
        public Nullable<int> Prod_Id { get; set; }
        public Nullable<int> Prod_Quantity { get; set; }
        public Nullable<decimal> Prod_Price { get; set; }
        public Nullable<int> Quantity { get; set; }
        public Nullable<int> Prod_Quantity1 { get; set; }
    
        public virtual Product Product { get; set; }
        public virtual User User { get; set; }
    }
}
