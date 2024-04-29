import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyPage from "./components/MyPage/PayDetail/MyPage";
import Reservation from "./pages/Reservation/Reservation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Reservation/Main";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="/reservation"
            element={<Reservation></Reservation>}
          ></Route>
          <Route path="/mypage/*" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
