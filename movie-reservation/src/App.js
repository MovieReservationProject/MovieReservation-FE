import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyPage from "./components/MyPage/PayDetail/MyPage";
import Reservation from "./pages/Reservation/Reservation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Reservation/Main";
import Home from "./pages/Mainpage/Mainpage";
import Login from "./pages/Login/Login";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="/reservation"
            element={<Reservation></Reservation>}
          ></Route>
          <Route path="/mypage/*" element={<MyPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
