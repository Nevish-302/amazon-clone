import { Route,Routes } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Signup from "./Signup";
import Offer from "./main_components/Landing_page";
import Cart from "./main_components/Cart";
import Register2 from "./Register2";
import Account from "./main_components/Account";
import Login2 from "./Login2";
import Register3 from "./Register3";
import Cart_login from "./main_components/Cart_login";
import Post from "./Post";
import Order from "./main_components/YourOrder";
import Security from "./Security";
import Prime from "./Prime";
import Address from "./main_components/Address";
import Payment from "./main_components/Payment";
import AmazonPay from "./main_components/AmazonPay";
import ContactUs from "./main_components/ContactUs";
import Orders from "./main_components/Order";
import BuyAgain from "./main_components/BuyAgain";
import Notyetshipped from "./main_components/Yetshipped";
import Cancelled from "./main_components/Cancelled";
import Newaddress from "./New_Address";
import Search from "./Search";
import Wishlist from "./Wishlist";
function App() {
  return (
  
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}>
          <Route exact path="" element={<Offer/>}></Route>
          <Route path="cart" element={<Cart/>}></Route>
          <Route path="account" element={<Account/>}></Route>
          <Route path="login_cart" element={<Cart_login/>} ></Route>
          <Route path="post" element={<Post/>}></Route>
          <Route path="search/:value" element={<Search/>}></Route>
          <Route path="wishlist" element={<Wishlist/>}></Route>
          <Route path="account/order" element={<Order/>}>
            <Route path="" element={<Orders/>}></Route>
            <Route path="buyagain" element={<BuyAgain/>}></Route>
            <Route path="notyetshipped" element={<Notyetshipped/>}></Route>
            <Route path="cancelled" element={<Cancelled/>}></Route>
          </Route>
          <Route path="account/prime" element={<Prime/>}></Route>
          <Route path="account/address" element={<Address/>}></Route>
          <Route path="account/payment" element={<Payment/>}></Route>
          <Route path="account/amazon_pay" element={<AmazonPay/>}></Route>
          <Route path="account/contact_us" element={<ContactUs/>}></Route>
          <Route path="account/new_address" element={<Newaddress/>}></Route>
        </Route>
        <Route  path="/signup" element={<Signup/>}></Route>
        <Route  path="/login" element ={<Login/>}></Route>
        <Route path="/login2" element={<Login2/>}></Route>
        <Route path="/register2" element={<Register2/>}></Route>
        <Route path="/register3" element={<Register3/>}></Route>
        <Route path="/account/security" element={<Security/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
