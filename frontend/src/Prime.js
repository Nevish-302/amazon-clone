import React from "react";
import delivery from "./main_components/delivery.jpg";
import primevid from "./main_components/primevid.jpg"
import music from "./main_components/music.jpg"
import reward from "./main_components/reward.jpg"
import reading from "./main_components/reading.jpg"
import gaming from "./main_components/gaming.jpg"
import early from "./main_components/early.jpg"
import savings from "./main_components/savings.jpg";
import Footer from "./main_components/Footer";
const Prime=(props)=>{
return(
    <div>
        <div className="the_navbar">
            <img src={props.img_src}></img>
            <div>
                <h2>{props.username}</h2>
                <h3>Your are not a prime member.</h3>
            </div>
        </div>
        <div>
                <h2>Important Message</h2>
                <h3>You are currently not a member of Amazon Prime. Join Prime</h3>
        </div>
        <div>
            <div>Prime members enjoy:</div>
            <div className="horizontal_prime">
                <img src={delivery}></img>
                <div>
                    <h2>FREE fast delivery</h2>
                    <h3>Unlimited free One-Day and Two-Day Delivery on eligible items - start shopping</h3>
                </div>
            </div>
            <div className="horizontal_prime">
                <img src={primevid}></img>
                <div>
                    <h2>Prime Video</h2>
                    <h3>Unlimited streaming of exclusive Indian and US blockbuster movies, TV shows and Amazon Originals on PrimeVideo.com</h3>
                </div>
            </div>
            <div className="horizontal_prime">
                <img src={music}></img>
                <div>
                    <h2>Prime music</h2>
                    <h3>Over a million songs. Unlimited. Ad-free. Now FREE with Amazon Prime.
Listen Now</h3>
                </div>
            </div>
            <div className="horizontal_prime">
                <img src={reward}></img>
                <div>
                    <h2>Unlimited 5% reward points</h2>
                    <h3>Eligible Prime members earn unlimited 5% reward points on purchases on Amazon.in using the Amazon Pay ICICI Bank credit card. Currently available in 35 cities. Know more</h3>
                </div>
            </div>
            <div className="horizontal_prime">
                <img src={reading}></img>
                <div>
                    <h2>Prime Reading</h2>
                    <h3>Read as much as you want from hundreds of eligible eBooks, comics and more. Learn More</h3>
                </div>
            </div>
            <div className="horizontal_prime">
                <img src={gaming}></img>
                <div>
                    <h2>Gaming with Prime</h2>
                    <h3>Access to FREE in-game content on popular mobile games, refreshed frequently. Explore Gaming</h3>
                </div>
            </div>
            <div className="horizontal_prime">
                <img src={early}></img>
                <div>
                    <h2>Prime Early Access</h2>
                    <h3>30-minute early access to Lightning Deals.</h3>
                </div>
            </div>
            <div className="horizontal_prime">
                <img src={savings}></img>
                <div>
                    <h2>More savings for your family</h2>
                    <h3>Prime members save an additional 10% on diaper subscriptions and get exclusive discounts and recommendations. Learn more</h3>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
)
}
export default Prime;