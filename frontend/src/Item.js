import React,{Link} from "react";
const Item=(props)=>{
    return (
<div className="item_">
                <img src={props.img}></img>
                <div>
                    <h3>{props.title}</h3>
                    <h2>{props.cost}</h2>
                </div>
</div>
)
}
export default Item;