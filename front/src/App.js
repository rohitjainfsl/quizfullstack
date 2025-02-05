import "./App.css";
import Header from './Header';
import Home from "./Home";
import Login from "./Login"
import Register from "./Register"
import Wall from "./Wall"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/wall" element={<Wall />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
