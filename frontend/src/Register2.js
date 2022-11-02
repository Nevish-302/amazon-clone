import React from "react";
import white from "./images/white_logo.jpg";
import "./main_components/login.css"
import {Link} from "react-router-dom";
import img1 from "./images/solve.jpg"
const Register2=()=>{
    return(
    <div className="signup">
        <Link to="/"><img src={white}></img></Link>
        <div className="inputs">
            <div className="solve">
            <h1>Solve this puzzle to protect your account</h1>
            <img src={img1} className="img_solve"></img>
            <Link to="/register3"><button className="continue">Solve puzzle</button></Link>
            </div>
        </div>
        <hr className="below"></hr>
        <h5>
                <ul>
                    <li>
                    Conditions of Use
                    </li>
                    <li>Privacy Notice</li>
                    <li>help</li>
                </ul>
        </h5>
        <h5>© 1996-2022, Amazon.com, Inc. or its affiliates</h5>
    </div>
    )
}
export default Register2;
