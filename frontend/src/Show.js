import React,{useEffect, useState} from "react";
import Item from "./Item";
import "./search.css"
const Show=(props)=>{
    useEffect(()=>{ 
        get_data()
    })
    var parts = window.location.href.split('/');
    var lastSegment = parts.pop() || parts.pop();
    const [all,setAll]=useState([]);
  
    const get_data=()=>{
        fetch("http://localhost:5000/search/q1/"+lastSegment,{method:"GET"}).then(res=>res.json())
        .then(data=>setAll(data.items))
        .catch(err=>console.error("Error",err));
    }
    return(
        < div className="Show">
            <div className="container_Show">
            { all.map((data)=>
            <Item title={data.name.substring(0,30)} cost={data.price} img={data.images}/>
            )
            }
            </div>
        </div>
    )
}
export default Show;