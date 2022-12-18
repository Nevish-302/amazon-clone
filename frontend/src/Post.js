import React, { useState } from "react";
import Footer from "./main_components/Footer";
import "./post.css"
const Post=(props)=>{
    const queryString=window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const image_src=urlParams.get('images')
    const title=urlParams.get('name')
    const author=urlParams.get('source')
    const description=urlParams.get('product_description')
    const cost=urlParams.get('price')*100.84
    const shipping =urlParams.get('in_stock')
    const found=()=>{
        if (shipping=='True')
        return 5;
        else 
        return 0;
    }
    const itemid=urlParams.get('itemid')
    const [value,setValue]=useState("1")
    const getting_quantity=(e)=>{
        setValue(e.target.value);
    }
    const send_cart=async()=>{
        var details={
            'item_s':[{id:itemid,number:value}]
          };
          var formBody=[];
          for (var property in details){
            var encodedKey=encodeURIComponent(property);
            var encodedValue=encodeURIComponent(details[property]);
            formBody.push(encodedKey+'='+encodedValue);
          }
          formBody=formBody.join('&');
          const data_=await fetch("http://localhost:5000/user/cart/add",{
            method:'POST',
            headers:{
              "Content-Type":"application/x-www-form-urlencoded"
            },
            body:formBody
          }).then(res=>res.json())
          .catch(err=>alert('YOU NEED TO LOG IN FIRST'))
    }
    return (
        <>
        <div className="main_body">
            <div className="col1">
                <img src={image_src} className="post_img"></img>
            </div>
            <div className="col2">
                <div className="middle">
                    <h1>{title}</h1>
                    <h4>{author}</h4>
                    <hr></hr>
                    <div className="post_box">
                    <h3>Save Extra with 0 offers</h3>
                    <hr></hr>
                    <h3>No Cost EMI:0</h3>
                    <hr></hr>
                    <h3>Bank Offer: 0</h3>
                    </div>
                    <h3>Brand : {description}</h3>
                </div>
            </div>
            <div className="col3">
                <div className="bracket">
                    <h3>Buy new:</h3>
                    <div className="costs1">
                        <h4>{cost}</h4>
                        <h3>{cost}</h3>
                        <h3>Save: Rs 0</h3>
                        <h3>Inclusive of all taxes</h3>
                    </div>
                </div>
                <h3>FREE delivery : 20% off on first order .Details</h3>
                <h3>Or fastest delivery : 2 days .Order withing 24 hours.Details</h3>
                <h4>Address//Users address</h4>
                <h2>Available to ship in {found()} days</h2>
                <h3>Sold by {author} and Fulfilled by Amazon</h3>
                <h3>Quantity
                <select value={value} onChange={getting_quantity}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>
                </h3>
                <button className="signin btnsignin" onClick={send_cart}>Add to Cart</button>
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
        <Footer/>
        </>
    )
}
export default Post;