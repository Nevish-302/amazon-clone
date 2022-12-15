import React,{useEffect, useState} from "react";
import "./main_components/navbar.css";
import logo from "./images/amazon_logo.jpg"
import address from "./images/address.jpg"
import flag_ from "./images/flag.jpg"
import signin from "./images/signin.jpg"
import order from "./images/orders.jpg"
import cart from "./images/cart.jpg"
import search from "./images/search.png"
import { Link, Outlet} from "react-router-dom";
const Main=()=>{
    useEffect(()=>{
        if (segment.startsWith("http://localhost:3000/")){
            setFlag("/login")
        }
        else if (segment.length>=10){
        setDisplay(segment.substring(0,9)+'...')
        setFlag(`?id=${window.location.href.split("=").pop()}`)
        }
        else {
            setDisplay(segment)
            setFlag(`?id=${window.location.href.split("=").pop()}`)
        }
    })
    const [final,setFinal]=useState('')
    const [text,setText]=useState('All')
    const search_text=(event)=>{
        setText(event.target.value)
    }
    const getInitialState=()=>{
        const value="All";
        return value;
    };
    const [flag,setFlag]=useState();
    const [value,setValue]=useState(getInitialState);
    const handleChange=(e)=>{
        setValue(e.target.value);
    }
    const [display,setDisplay]=useState('sign in');
    const segment=window.location.href.split("=").pop();
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
            <input type="text" onChange={search_text}></input>
            <div className="search_logo"><a href={'/search/'+text}><img src={search}></img></a></div>
            </div></li>
            <li><img src={flag_}></img></li>
            <Link to={flag}><li>
            <h4 className="adding_account_email">Hello, {display}</h4>
            <img src={signin} className="adding_account"></img>
            </li>
            </Link>
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