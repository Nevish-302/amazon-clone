import React from "react";
import white from "./images/white_logo.jpg"
import "./main_components/login.css"
import {Link} from "react-router-dom";
const Login=(props)=>{
    return(
    <div className="whole">
        <Link to="/"><img src={white}></img></Link>
        <div className="inputs">
            <h1>Sign in</h1>
            <hr></hr>
            <div className="display">
                <img src={props.img_src}></img>
                <div><h3>{props.username}</h3>
                <h4>{props.email}</h4></div>
            </div>
            <label>Password</label><br></br>
            <input type="password" className="password"></input><br></br>
            <Link to="/login2"><button className="continue">Signin</button></Link>
            <input type="checkbox"></input>
            Keep me signed in. Details 
        </div>
        <h4>
            or
        </h4>
        <button className="create">Get an OTP on your phone</button>
        <h5>i Message and Data rates may apply.</h5>
        <hr></hr>
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
export default Login;