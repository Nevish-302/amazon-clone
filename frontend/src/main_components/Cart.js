import React from "react";
import { Link } from "react-router-dom";
import cart1 from "./cart1.jpg"
import Footer from "./Footer";
import "./cart.css"
const Cart=()=>{
    return(
        <>
        <div className="background">
            <div className="order">
                <img src={cart1} className="cart"></img>
                <div>
                    <h1>Your Amazon Cart is empty</h1>
                    <h3>Shop today's deals</h3>
                    <Link to="/login"><button className="signin">Sign in to your account</button></Link>
                    <Link to ="/signup"><button className="signup">Sign up now</button></Link>
                </div>
            </div>
            <div className="para">
            <h5>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.</h5>
            <h5>Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</h5>
            </div></div>
        <div>
            <hr></hr>
        {/*designing done till here*/}
        <div className="personal">
        <h4>See personalized recommendations</h4>
        <button className="signin_">Sign in</button>
        <h5>New customer? Start here.</h5>
        <hr></hr>
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Cart;