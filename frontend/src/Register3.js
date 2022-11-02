import React from "react";
import white from "./images/white_logo.jpg";
import "./main_components/login.css"
import {Link} from "react-router-dom";
const Register3=()=>{
    return(
    <div className="signup">
        <Link to="/"><img src={white}></img></Link>
        <div className="inputs">
           
            <h1>Verify mobile number</h1>
            <p>A text with a One Time Password (OTP) has been sent to your mobile number: Change</p>
            <h4><div className="far">
                <li>Enter OTP</li>
                <li>Resend OTP</li>
            </div></h4>
            <input type="text" className="OTP"></input>
            <button className="continue"> Create your Amazon account</button>
            <p>By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.</p>
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
export default Register3;
