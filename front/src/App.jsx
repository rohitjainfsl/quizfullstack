import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from "./Signup";
import Login from "./Login";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/user/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
