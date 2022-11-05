import React from "react";
import {Link} from "react-router-dom";
const Notyetshipped=()=>{
    return (
        <div>
            <h2>Looking for an order? All of your orders have been dispatched. <Link to="/account/order">View all orders</Link></h2>
        </div>
    )
}
export default Notyetshipped;