import React from "react";
import "./account.css";
import Footer from "./Footer";
const Address=()=>{
return(
    <>
    <div className="address_css">
        <h4>Your Account {`>`} Your Address</h4>\
        <h1>Your Addresses</h1>
        <input type="text" placeholder="+ Add address" className="address"></input>
    </div>
    <Footer/>
    </>
)
}
export default Address;