import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
