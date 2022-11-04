import React from "react";
import "./footer.css"
const Footer=()=>{
    return (
        <>
        <div className="back">Back to top</div>
        <div className="bottom">
            <table className="tables">
                <tr className="top_row">
                    <th>Get to Know Us</th>
                    <th>Connect with Us</th>
                    <th>Make Money with us</th>
                    <th>Let Us Help You</th>
                </tr>
                <tr>
                    <td>About Us</td>
                    <td>Facebook</td>
                    <td>Sell on Amazon</td>
                    <td>COVID-19 and Amazon</td>
                </tr>
                <tr>
                    <td>Careers</td>
                    <td>Twitter</td>
                    <td>Sell under Amazon Accelerator</td>
                    <td>Your account</td>
                </tr>
                <tr>
                    <td>Press Releases</td>
                    <td>Instagram</td>
                    <td>Amazon Global Selling</td>
                    <td>Returns Centre</td>
                </tr>
                <tr>
                    <td>Amazon Science 
                    </td>
                    <td></td>
                    <td>Become an Affiliate</td>
                    <td>100% Purchase Protection</td>
                </tr>
            </table>
            <hr className="next"></hr>
        </div>
        </>
    )
}
export default Footer;