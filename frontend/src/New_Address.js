import React from "react";
const Newaddress=()=>{
    return(
        <div>
           <h3>Your Account {`>`} Your Address {`>`} New Address</h3>
           <h1>Add a new address</h1>
           <h3>Or find an Amazon collection location near you</h3>
           <div><h2>Save time. Autofill your current location.</h2>
           <button>Autofill</button></div>
           <label>Country / Region</label>
           <select><option>India</option></select>
           <label>Full Name</label>
           <input type="text"></input>
           <label>Mobile number</label>
           <input type="text"></input>
           <label>Pincode</label>
           <input placeholder="6 digits[0-9] PIN code" type="text"></input>
           <label>Flat, House no.,Building,Company,Apartment</label>
           <input type="text"></input>
           <label>Area, Street, Sector, Village</label>
           <input type="text"></input>
           <label>Landmark</label>
           <input placeholder="E.g. near apollo hospital" type="text"></input>
           <label>Town/City</label>
           <input type="text"></input>
           <label>State</label>
           <select><option>Choose a state</option></select>
           <input type="checkbox"></input>Make this my default address
           <h2>Add delivery instructions</h2>
           <p>Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned.</p>
           <label>Address Type</label>
           <select><option>Select an Address Type</option>
           <option>Home(7 am - 9 pm delivery)</option>
           <option>Office/Commercial(10 AM - 6 PM delivery)</option></select>
           <button>Add address</button>
        </div>
    )
}
export default Newaddress;