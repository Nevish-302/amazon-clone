import { Route,Routes } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Signup from "./Signup";
import Offer from "./main_components/Offer";
import Cart from "./main_components/Cart";
import Register2 from "./Register2";
import Account from "./main_components/Account";
import Login2 from "./Login2";
import Register3 from "./Register3";
function App() {
  return (
  
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}>
          <Route exact path="" element={<Offer/>}></Route>
          <Route path="cart" element={<Cart/>}></Route>
          <Route path="account" element={<Account/>}></Route>
        </Route>
        <Route  path="/signup" element={<Signup/>}></Route>
        <Route  path="/login" element ={<Login/>}></Route>
        <Route path="/login2" element={<Login2/>}></Route>
        <Route path="/register2" element={<Register2/>}></Route>
        <Route path="/register3" element={<Register3/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
