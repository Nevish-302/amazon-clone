import React from "react";
import Footer from "./Footer";
import "./cart.css"
import Card from "./Contain";
const Cart_login=(props)=>{
    return(
        <>
        <div className="main">
            <div className="interior">
                <h1>Shopping Cart</h1>
                <h3>Deselect all items</h3>
                <hr></hr>
                <Card/>
            </div>
            <div className="total">
                <div className="subtotal">
Part of your order qualifies for FREE Delivery. Select this option at checkout. Details

<h2>Subtotal({props.num} items):total</h2>
<input type="checkbox"></input>
This order contains a gift
</div>
<button className="continue btn">Proceed to buy</button>
</div>
        </div>
        <Footer/>
        </>
    )
}
export default Cart_login;