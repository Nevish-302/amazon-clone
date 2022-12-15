import React, { useEffect } from "react";
import "./search.css"
import Show from "./Show";
import Sidebar from "./Sidebar";
const Search=()=>{
    return(
        <div>
    <div class="search_number">
        has --- results
<header class="search_num_header">
    <select class="search_sortby">
        <option value="featured">Featured</option>
        <option value="priceltoh">Price Low To High</option>
        <option value="pricehtl">Price Hight To Low</option>
        <option value="acustomre">Avg. Custom Review</option>
        <option value="newarrival">New Arrivals</option>
    </select>
</header>
</div>
<div className="final_display">
<Sidebar/>
<Show />
</div>
</div>
    )
}
export default Search;