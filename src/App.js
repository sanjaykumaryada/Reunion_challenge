import "./styles.css";
import HomePage from "./Component/HomePage";
import Login from "./Component/Login";
import { Routes, Route } from "react-router-dom";
import Favourite from "./Component/Favourite";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="/favourite" element={<Favourite />}></Route>
      </Routes>
    </div>
  );
}
