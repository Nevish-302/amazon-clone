import React from "react";
import{Link} from "react-router-dom";
const Cancelled=()=>{
    return (
        <div>
            <h2>We aren't finding any cancelled orders (for orders placed in the last 6 months). <Link to="/account/order">View all orders</Link></h2>
        </div>
    )
}
export default Cancelled;