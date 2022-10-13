import { BrowserRouter,Route,Routes } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Signup from "./Signup";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route  path="/signup" element={<Signup/>}></Route>
        <Route  path="/login" element ={<Login/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
