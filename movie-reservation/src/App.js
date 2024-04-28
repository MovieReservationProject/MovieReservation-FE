import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Reservation from "./pages/Reservation/Reservation";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Main from "./pages/Reservation/Main";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path ="/reservation" element ={<Reservation></Reservation>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
