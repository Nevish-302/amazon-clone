import React from "react";
import "./card.css";
const Card=(props)=>{
    return (
        <div className="cart_contain">
            <input type="checkbox"></input><br></br>
            <img src={props.img_src} className="contain_img"></img>
            <div>
                <h2>{props.title}</h2>
                <h4>{props.stock}</h4>
                <h4>sold by {props.author}</h4>
                <h4>gift options {props.gift_options}</h4>
                <select className="select_opt">
                    <option>QTY: 1</option>
                    <option>QTY: 2</option>
                </select>
                <h4 className="spacing">| Delete | Save for later | See more like this</h4>
            </div>
            <span>{props.cost}</span>
        </div>
    )
}
export default Card;