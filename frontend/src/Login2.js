import React,{useState} from "react";
import white from "./images/white_logo.jpg"
import "./main_components/login.css";
import {Link} from "react-router-dom";
const Login2=()=>{
    const segment=window.location.href.split("=").pop();
    const [password,setPassword]=useState('');
    const handleChange_pass=event=>{
        setPassword(event.target.value)
    }
    const handleClick = event => {
        event.preventDefault();
        signin()
      };
      const signin=async()=>{
        var details={
          'username':segment,
          'password':password
        };
        var formBody=[];
        for (var property in details){
          var encodedKey=encodeURIComponent(property);
          var encodedValue=encodeURIComponent(details[property]);
          formBody.push(encodedKey+'='+encodedValue);
        }
        formBody=formBody.join('&');
        const data_=await fetch("http://localhost:5000/auth/signin",{
          method:'POST',
          headers:{
            "Content-Type":"application/x-www-form-urlencoded"
          },
          body:formBody
        }).then(res=>res.json())
        window.location.href=`http://localhost:3000?id=${segment}`;
      }
    return(
        <div className="whole">
        <Link to="/"><img src={white}></img></Link>
        <div className="inputs">
            <h1>Sign in</h1>
            <p>{segment} .Change</p>
            <label>Password</label><br></br>
            <input type="password" className="password" onChange={handleChange_pass}></input><br></br>
            <button className="continue" onClick={handleClick}>Sign in</button>
            <input type="checkbox"></input>Keep me signed in. Details
        </div>
        <h5>
            or
        </h5>
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
export default Login2;