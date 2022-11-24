import React from "react";
import "./search.css"
const Show=(props)=>{
    return(
        < div className="Show">
            <div className="container_Show">
            <div className="item_">
                <img src={props.img}></img>
                <div>
                    <h3>{props.title}</h3>
                    <h2>{props.cost}</h2>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Show;