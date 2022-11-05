import React from "react";
const Orders=()=>{
    return (
        <div>0 orders placed in 
            <select>
                <option>past 3 months</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
            </select><br></br>
            <h2>Looks like you haven't placed an order in the last 3 months.View orders in 2022</h2>
        </div>
    )
}
export default Orders;