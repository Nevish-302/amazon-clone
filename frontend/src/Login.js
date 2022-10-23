import React from "react";
import white from "./images/white_logo.jpg"
import "./main_components/login.css"
import {Link} from "react-router-dom";
const Login=()=>{
    return(
    <div className="whole">
        <Link to="/"><img src={white}></img></Link>
        <div className="inputs">
            <h1>Sign in</h1>
            <label>Email or mobile phone number</label><br></br>
            <input type="email" className="email"></input><br></br>
            <button className="continue">Continue</button>
            <p>By continuing, you agree to Amazon's conditions of<br></br> Use and Privacy Notice</p>
            <span>Need help?</span>
        </div>
        <h4>
            New to Amazon?
        </h4>
        <button className="create">Create your Amazon account</button>
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