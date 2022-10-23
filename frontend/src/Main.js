import React from "react";
import "./main_components/navbar.css";
import logo from "./images/amazon_logo.jpg"
import address from "./images/address.jpg"
import flag from "./images/flag.jpg"
import signin from "./images/signin.jpg"
import order from "./images/orders.jpg"
import cart from "./images/cart.jpg"
import search from "./images/search.png"
import { Link, Outlet} from "react-router-dom";
const Main=()=>{
    return(
        <>
    <nav>
        <ul>
            <li><img src={logo}></img>
            </li>
            <li><img src={address}></img></li>
            <li><div>
            <select id="options">
                <option>All Categories</option>
                <option>Amazon Fashion</option>
                <option>Alexa Skills</option>
                <option>Amazon Devices</option>
            </select>
            <input type="text"></input>
            <Link to="/"><div className="search_logo"><img src={search}></img></div></Link>
            </div></li>
            <li><img src={flag}></img></li>
            <li><img src={signin}></img>
            </li>
            <li><img src={order}></img></li>
            <li><Link to="/cart"><img src={cart}></img></Link></li>
        </ul>
    </nav>
    <div className="browse">
        <ul>
        <li>All</li>
        <li>Best Sellers</li>
        <li>Today's Deals</li>
        <li>Mobiles</li>
        <li>Customer Service</li>
        <li>Electronics</li>
        <li>Books</li>
        <li>Fashion</li>
        <li>Home & Kitchen</li>
        <li>Prime</li>
        <li>New Releases</li>
        <li>Computers</li>
        <li>Amazon Pay</li>
        </ul>
    </div>
    <Outlet/>
    </>
    )
}
export default Main;