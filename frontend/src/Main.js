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
            <li><Link to="/"><img src={logo}></img></Link>
            </li>
            <li><img src={address}></img></li>
            <li><div>
            <select id="options">
                <option>All</option>
                <option>All Categories</option>
                <option>Home</option>
                <option>Vehicle Parts & Accessories</option>
                <option>Computers/Tablets & Networking</option>
                <option>Business</option>
                <option>Toys & Games</option>
                <option>Sound & Vision</option>
                <option>Books</option>
                <option>Music</option>
                <option>Health & Beauty</option>
                <option>Video Games & Consoles</option>
                <option>Clothes</option>
                <option>Crafts</option>
                <option>Sporting Goods</option>
                <option>Films & TV</option>
                <option>Mobile Phones & Communication</option>
                <option>Jewellery & Watches</option>
                <option>Dolls & Bears</option>
                <option>Musical Instruments</option>
                <option>Collectables</option>
                <option>Cameras & Photography</option>
                <option>Baby</option>
                <option>Garden & Patio</option>
                <option>Pet Supplies</option>
                <option>Art</option>
                <option>Antiques</option>
                <option>Everything Else</option>
                <option>Stamps</option>
            </select>
            <input type="text"></input>
            <div className="search_logo"><img src={search}></img></div>
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