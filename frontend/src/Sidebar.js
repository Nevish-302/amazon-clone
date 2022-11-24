import React from "react";
import "./search.css"
const Sidebar=()=>{
    return(
        <div>
<section className="search_main">
    <div className="search_bar">
        <div className="option">
            <div className="optionhead">Delivery Day</div>
            <div><input type="checkbox" value = "today" name ="today" className="searchbar_option"></input> Get It Today</div>
            <div><input type="checkbox" value = "tomorrow" name ="tomorrow" className="searchbar_option"></input> Get It by Tomorrow </div>
            <div><input type="checkbox" value = "days_2" name ="days_2" className="searchbar_option"></input> Get It in 2 Days </div>
        </div>
        <div className="option">
            <div className="optionhead">Category</div>
            <a href="">Face Care </a>
            <a href="">Home & Kitchen </a>
            <a href="">Kids' Furniture </a>
            <a href="">Telephones & Accessories </a>
            <a href="">Mobile Accessories </a>
            <a href="">Soft Dolls </a>
            <a href="">Snacks & Sweets </a>
            <a href="">Shampoo & Conditioner </a>
        </div>
    <div className="option">
        <div className="optionhead">Customer Review</div>
        <a href="">4 stars and Up</a>
        <a href="">3 stars and Up</a>
        <a href="">2 stars and Up</a>
        <a href="">1 stars and Up</a>
    </div>
    <div className="option">
        <div className="optionhead">Brand</div>
        <div><input type="checkbox" value = "plum" name ="plum" className="searchbar_option"></input>
            <label for="plum" className="searchbarlabel"> Plum </label></div>
    </div>
    <div className="option">
        <div className="optionhead">
            Price
        </div>
        <a href=""> Under ₹1,000 </a>
        <a href=""> ₹1,000 - ₹5,000 </a>
        <a href=""> ₹5,000 - ₹10,000 </a>
        <a href=""> ₹10,000 - ₹20,000 </a>
    </div>
    <div className="option">
        <div className="optionhead">
            Pay On Delivery
        </div>
        <div><input type="checkbox" value = "cod" name ="cod" className="searchbar_option"></input>
            <label for="cod" className="searchbarlabel">Eligible for Pay On Delivery</label></div>
    </div>
    
    <div className="option">
        <div className="optionhead">
            New Arrivals
        </div>
        <a href="">Last 30 days </a>
        <a href=""> Last 90 days </a>
    </div>
    
    <div className="option">
        <div className="optionhead">
            Discount
        </div>
        <a href="">10% Off or more </a>
        <a href="">25% Off or more </a>
        <a href="">35% Off or more </a>
        <a href="">50% Off or more </a>
        <a href="">60% Off or more </a>
        <a href="">70% Off or more </a>
    </div>
    
    <div className="option">
        <div className="optionhead">
          Availability  
        </div>
        <div>
        <input type="checkbox" value = "outstock" name ="outstock" className="searchbar_option"></input>
        <label for="outstock" className="searchbarlabel">Include Out of Stock</label>
        </div>
        </div>
</div>
</section>
</div>
    )
}
export default Sidebar;