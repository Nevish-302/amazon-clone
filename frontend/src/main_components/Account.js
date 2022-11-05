import React from "react";
import "./account.css";
import {Link} from "react-router-dom";
import Order from "./YourOrder";
const Account=()=>{
    return(
        <div><div className="account-main">
        <h1 className="account-head">
            Your Account
        </h1>
        <div className="account-boxes">
            <Link to="/account/order">
            <div className="account-box">
                <div className="account-image">
                    <img alt="Your Orders" height = "44.25px" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png"></img>
                </div>
                <div className="account-text">
                    <div className="account-text-head">
                        Your Orders
                    </div>
                    <div className="account-text-desc">
                        Track, return or buy things again
                    </div>
                </div>
            </div>
            </Link>
            <Link to="/account/security">
            <div className="account-box">
                <div className="account-image">
                    <img alt="Login & Security" height = "52.88px" src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png"></img>
                </div>
                <div className="account-text">
                    <div classclassName="account-text-head">
                        Login & Security
                    </div>
                    <div classclassName="account-text-desc">
                        Edit login, name, and mobile number
                    </div>
                </div>
            </div>
            </Link><Link to="/account/prime">
            <div className="account-box">
                <div className="account-image">
                    <img alt="Prime" height = "47.38px" src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/rc_prime._CB485926807_.png"></img>
                </div>
                <div className="account-text">
                    <div className="account-text-head">
                        Prime
                    </div>
                    <div className="account-text-desc">
                        View benefits and payment settings
                    </div>
                </div>
            </div></Link>
            <Link to="/account/address">
            <div className="account-box">
                <div className="account-image">
                    <img alt="Your Orders" height = "51.23px" src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png"></img>
                </div>
                <div className="account-text">
                    <div namclassName="account-text-head">
                        Your Addresses
                    </div>
                    <div className="account-text-desc">
                        Edit addresses for orders and gifts
                    </div>
                </div>
            </div>
            </Link>
            <Link to="/account/payment"><div className="account-box">
                <div className="account-image">
                    <img alt="Your Orders" height = "47.38px" src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png"></img>
                </div>
                <div className="account-text">
                    <div className="account-text-head">
                        Payment Options
                    </div>
                    <div className="account-text-desc">
                        Edit or add payment methods
                    </div>
                </div>
            </div>
            </Link><Link to="/account/amazon_pay"><div className="account-box">
                <div className="account-image">
                    <img alt="Your Orders" height = "47.38px" src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/amazon_pay._CB485946857_.png"></img>
                </div>
                <div className="account-text">
                    <div className="account-text-head">
                        Amazon Pay Balance
                    </div>
                    <div className="account-text-desc">
                        Add money to your balance
                    </div>
                </div>
            </div></Link>
            <Link to="/account/contact_us"><div className="account-box">
                <div className="account-image">
                    <img alt="Your Orders" height = "63px" src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/self-service/contact_us._CB623781998_.png"></img>
                </div>
                <div className="account-text">
                    <div className="account-text-head">
                        Contact Us
                    </div>
                    <div className="account-text-desc">
                    </div>
                </div>
            </div>
            </Link>
        </div>
        <br></br>
        <hr ></hr>
        <br></br>
        <div className="account-boxes">
            <div className="account-box">
                <div className="account-text">
                    <div className="account-text-head-1">
                        Digital content and devices
                    </div>
                    <div className="account-text-link">
                        
                        <div><a href="">Apps and more </a> </div>
                        <div><a href="">Content and devices </a> </div>
                        <div><a href="">Digital gifts you've received </a> </div>
                    
                    </div>
                </div>
            </div>
            <div className="account-box">
                <div className="account-text">
                    <div className="account-text-head-1">
                        Email alerts, messages, and ads
                    </div>
                    <div className="account-text-link">
                        
                        <div><a href="">Advertising preferences</a></div>    
                        <div><a href="">Communication preferences</a></div>    
                        <div><a href="">SMS alert preferences</a></div>    
                        <div><a href="">Message center</a></div>    
                        <div><a href="">Alexa shopping notifications</a></div>    
                        <div><a href="">Deals Notifications</a></div>    
                        
                    </div>
                </div>
            </div>
            
            <div className="account-box">
                <div className="account-text">
                    <div className="account-text-head-1">
                        More ways to pay
                    </div>
                    <div className="account-text-link">
                        
                        <div><a href="">Default Purchase Settings </a> </div>
                        <div><a href="">Amazon Pay </a> </div>
                        <div><a href="">Bank accounts for refunds</a> </div>
                        <div><a href="">Coupons</a></div> 
                    
                    </div>
                </div>
            </div>
            <div className="account-box">
                <div className="account-text">
                    <div className="account-text-head-1">
                        Ordering and shopping preferences
                    </div>
                    <div className="account-text-link">
                        
                        <div><a href="">Leave packaging feedback</a> </div>
                        <div><a href="">Lists</a> </div>
                        <div><a href="">Manage saved IDs</a> </div>
                        <div><a href="">Profile</a> </div>
                        <div><a href="">Language settings</a> </div>
                        
                    </div>
                </div>
            </div>
            <div className="account-box">
                <div className="account-text">
                    <div className="account-text-head-1">
                        Other accounts
                    </div>
                    <div className="account-text-link">
                        
                        <div><a href=""> Linking </a></div>
                        <div><a href="">Amazon Business registration </a></div>
                        <div><a href="">Seller account</a> </div>
                        <div><a href="">Amazon Web Services </a></div>
                        <div><a href="">Login with Amazon</a> </div>

                    
                    </div>
                </div>
            </div>
            <div className="account-box">
                <div className="account-text">
                    <div className="account-text-head-1">
                        Shopping programs and rentals
                    </div>
                    <div className="account-text-link">
                        
                        <div><a href="">Manage Your Profiles </a> </div>
                        <div><a href="">Subscribe & Save </a> </div>
                        <div><a href="">Shop the Kids' Store by age  </a> </div>
                    
                    </div>
                </div>
            </div>
            <div className="account-box">
                <div className="account-text">
                    <div className="account-text-head-1">
                        Subscriptions
                    </div>
                    <div className="account-text-link">
                        
                        <div><a href="">Email</a> </div>
                        <div><a href="">Memberships & Subscriptions</a> </div>
                    
                    </div>
                </div>
            </div>
            <div className="account-box">
                <div className="account-text">
                    <div className="account-text-head-1">
                        Data and Privacy
                    </div>
                    <div className="account-text-link">
                        
                        <div><a href="">Request Your Information </a> </div>
                        <div><a href="">Close Your Amazon Account </a> </div>
                        <div><a href="">Privacy Notice</a> </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div></div>
    )
}
export default Account;