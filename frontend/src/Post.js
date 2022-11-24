import React from "react";
import "./post.css"
const Post=(props)=>{
    return (
        <>
        <div className="main_body">
            <div className="col1">
                <img src={props.image_src} className="post_img"></img>
            </div>
            <div className="col2">
                <div className="middle">
                    <h1>{props.title}</h1>
                    <h4>{props.author}</h4>
                    <hr></hr>
                    <div className="post_box">
                    <h3>Save Extra with {props.save} offers</h3>
                    <hr></hr>
                    <h3>No Cost EMI:{props.EMI}</h3>
                    <hr></hr>
                    <h3>Bank Offer: {props.Bank}</h3>
                    </div>
                    <h3>{props.description}</h3>
                </div>
            </div>
            <div className="col3">
                <div className="bracket">
                    <h3>Buy new:</h3>
                    <div className="costs1">
                        <h4>{props.cost}</h4>
                        <h3>{props.MRP}</h3>
                        <h3>Save: Rs.{props.MRP-props.cost}</h3>
                        <h3>Inclusive of all taxes</h3>
                    </div>
                </div>
                <h3>FREE delivery : {props.free_date} on first order .Details</h3>
                <h3>Or fastest delivery : {props.fastest_date}.Order withing {props.fastest_time}.Details</h3>
                <h4>Address//Users address</h4>
                <h2>Available to ship in {props.shipping} days</h2>
                <h3>Sold by {props.author} and Fulfilled by Amazon</h3>
                <h3>Quantity
                <select>
                    <option>1</option>
                    <option>2</option>
                </select>
                </h3>
                <button className="signin btnsignin">Add to Cart</button>
                <button >Add to Wishlist</button>
                <button className="continue btncontinue">Buy Now</button>
            </div>
        </div>
        <hr></hr>
        <div className="inner">
        <h1>Special offers and product promotions</h1>
        <h1>Product description</h1>
        <h1>Product details</h1>
        </div>
        </>
    )
}
export default Post;