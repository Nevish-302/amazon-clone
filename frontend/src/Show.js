import React,{useEffect, useState,Link} from "react";

import Item from "./Item";
import "./search.css"
const Show=(props)=>{
    useEffect(()=>{ 
        get_data()
    })
    var parts = window.location.href.split('/');
    var lastSegment = parts.pop() || parts.pop();
    const [all,setAll]=useState([]);
    const id2=window.location.href.split('/')[3];
    const get_data=()=>{
        fetch("http://localhost:5000/search/q1/"+lastSegment,{method:"GET"}).then(res=>res.json())
        .then(data=>setAll(data.items))
        .catch(err=>console.error("Error",err));
    }

    return(
        < div className="Show">
            <div className="container_Show">
            { all.map((data)=>
            <a href={`http://localhost:3000/${id2}/post/?images=${data.images}&name=${data.name}&source=${data.source}&product_description=${data.brand}&price=${data.price}&in_stock=${data.in_stock}&itemid=${data._id}`}><Item title={data.name.substring(0,30)} cost={data.price} img={data.images}/></a>
            )
            }
            </div>
        </div>
    )
}
export default Show;