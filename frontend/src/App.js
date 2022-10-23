import { Route,Routes } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Signup from "./Signup";
import Offer from "./main_components/Offer";
import Cart from "./main_components/Cart";
function App() {
  return (
  
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}>
          <Route exact path="" element={<Offer/>}></Route>
          <Route path="cart" element={<Cart/>}></Route>
        </Route>
        <Route  path="/signup" element={<Signup/>}></Route>
        <Route  path="/login" element ={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
