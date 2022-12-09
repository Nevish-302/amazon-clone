import React,{useState} from "react";
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
    const getInitialState=()=>{
        const value="All";
        return value;
    };
    const [value,setValue]=useState(getInitialState);
    const handleChange=(e)=>{
        setValue(e.target.value);
    }
    return(
        <>
    <nav>
        <ul>
            <li><Link to="/"><img src={logo}></img></Link>
            </li>
            <li><img src={address}></img></li>
            <li><div>
            <select id="options" value={value} onChange={handleChange}>
                <option value="All">All</option>
                <option value="All Categories">All Categories</option>
                <option value="Home">Home</option>
                <option value="Vehicle Parts & Accessories">Vehicle Parts & Accessories</option>
                <option value="Computer/Tablets & Networking">Computers/Tablets & Networking</option>
                <option value="Buisness">Business</option>
                <option value="Toys & Games">Toys & Games</option>
                <option value="Sound & Vision">Sound & Vision</option>
                <option value="Books">Books</option>
                <option value="Music">Music</option>
                <option value="Health & Beauty">Health & Beauty</option>
                <option value="Video Games & Consoles">Video Games & Consoles</option>
                <option value="Clothes">Clothes</option>
                <option value="Crafts">Crafts</option>
                <option value="Sporting Goods">Sporting Goods</option>
                <option value="Films & TV">Films & TV</option>
                <option value="Mobile Phones & Communication">Mobile Phones & Communication</option>
                <option value="Jewellery & Watches">Jewellery & Watches</option>
                <option value="Dolls & Bears">Dolls & Bears</option>
                <option value="Musical Instruments">Musical Instruments</option>
                <option value="Collectables">Collectables</option>
                <option value="Cameras & Photography">Cameras & Photography</option>
                <option value="Baby">Baby</option>
                <option value="Garden & Pation">Garden & Patio</option>
                <option value="Pet Supplies">Pet Supplies</option>
                <option value="Art">Art</option>
                <option value="Antiques">Antiques</option>
                <option value="Everything Else">Everything Else</option>
                <option value="Stamps">Stamps</option>
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