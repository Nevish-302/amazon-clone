import React from "react";
import "./account.css"
import {Outlet,Link} from "react-router-dom";
import Footer from "./Footer";
const Order=()=>{
return(
    <div className="YourOrders">
        <h3><Link to="/account">Your Account</Link> {`>`} Your Orders</h3>
        <div className="orders_flex">
        <h1>Your Orders</h1>
        <div>
            <input placeholder="Search all orders"></input>
            <button>Search Order</button>
        </div>
        </div>
        <h2>
            <ul>
                <Link to ="/account/order"><li>Orders</li></Link>
                <Link to="/account/order/buyagain"><li>Buy Again</li></Link>
                <Link to="/account/order/notyetshipped"><li>Not Yet Shipped</li></Link>
                <Link to="/account/order/cancelled"><li>Cancelled Orders</li></Link>
            </ul>
        </h2>
        <Outlet/>
        <Footer/>
    </div>
)
}
export default Order;