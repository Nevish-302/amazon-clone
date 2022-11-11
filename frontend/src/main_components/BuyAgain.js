import React from "react";
import { Link } from "react-router-dom";
const BuyAgain=()=>{
    return (
        <div>
            <h2>There are no recommended items for you to buy again at this time. Check <Link to="/account/order">Your Orders</Link> for items you previously purchased.</h2>
            <h1>Discover</h1>
        </div>
    )
}
export default BuyAgain;