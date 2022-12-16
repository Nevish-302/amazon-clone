import React from "react";
import "./landing_page.css";
import Footer from "./Footer";
import { useState,useEffect } from "react";
import img1 from "./banner1.jpg";
import img2 from "./banner2.jpg";
import img3 from "./banner3.jpg";
import img4 from "./banner4.jpg";
import img5 from "./banner5.jpg";
import img6 from "./banner6.jpg";
import img7 from "./banner7.jpg";
import img8 from "./banner8.jpg";
import profess from "./profess.jpeg"
import profess2 from "./profess2.jpeg"
import profess3 from "./profess3.jpeg"
import profess4 from "./profess4.jpeg"
const images = [img1,img2,img3,img4,img5,img6,img7,img8]; 
const Offer=()=>{

    const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      
      setCount(count => count + 1);
    }, 3000);

    return () => clearInterval(timerId);
  }, []);

  const image = images[count % images.length];

    return(
      <>
        <div className="banner">
            <img  src={image}></img>
            <div className="array">
            <div className="divs">
              <h2>Exclusive offers on Books</h2>
              <img src={profess}></img><br></br>
            </div>
            <div className="divs"><h2>Revamp your home in style</h2>
            <img src={profess2}></img><br></br></div>
            <div className="divs"><h2>Up to 60% off | Professional tools,...</h2>
            <img src={profess3}></img><br></br>
            </div>
            <div className="divs"><h2>Become an Amazon seller</h2>
            <img src={profess4}></img><br></br></div>
            </div>
        </div>
        
      </>
    )
}
export default Offer;