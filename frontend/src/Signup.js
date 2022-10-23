import React from "react";
import white from "./images/white_logo.jpg";
import "./main_components/login.css"
import {Link} from "react-router-dom";
const Signup=()=>{
    return(
    <div className="signup">
        <Link to="/"><img src={white}></img></Link>
        <div className="inputs">
            <h1>Create Account</h1>
            <label>Your name</label><br></br>
            <input type="text" className="name" placeholder="First and last name"></input><br></br>
            <label>Mobile number</label><br></br>
            <div className="mobile">
            <select className="code">
                <option>IN +91</option>
            </select>
            <input type="number" placeholder="Mobile number" className="number"></input>
            </div>
            <label>Email(optional)</label><br></br>
            <input type="email" className="email"></input><br></br>
            <label>Password</label><br></br>
            <input type="password" placeholder="At least 6 characters" className="password"></input><br></br>
            <h5 className="caption">Passwords must be at least 6 characters.</h5>
            <h5>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.</h5>
            <button className="continue">Continue</button>
            <hr className="below"></hr>
            <div>
            <h5>Already have an account ?<Link to="/login"> Sign in</Link></h5>
            <h5>Buying for work? Create a free business account</h5>
            </div>
            <h5>By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.</h5>
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
export default Signup;
