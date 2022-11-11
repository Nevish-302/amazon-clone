import React from "react";
import Footer from "./Footer";
import "./account.css"
const Payment=()=>{
return(
    <div>
        <h3>Your Account {`>`} Manage Payment Methods</h3>
        <h1>Your Payment Options</h1>
        <h4>An overview of your payment methods, settings and subscriptions with Amazon.</h4>
        <div>i As per new RBI guidelines, some of your saved cards may be removed. Please re-enter card details and save it.Learn more</div>
        <div className="box">Manage Kindle Payment setting</div>
        <div className="box">Edit payment method for a current order</div>
        <div className="box">Manage Bank Accouts</div>
        <Footer/>
    </div>
)
}
export default Payment;