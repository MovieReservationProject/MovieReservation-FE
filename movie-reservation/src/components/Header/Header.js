import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "./Logo";
import UserActions from "./UserActions";
import Navigation from "./Navigation";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("myId") === null) {
      console.log("isLoggedIn ?? ::", isLoggedIn);
    } else {
      setIsLoggedIn(true);
      console.log("isLoggedIn ?? ::", isLoggedIn);
    }
  });

  const navigate = useNavigate();

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("myId");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("storeId");
    if (window.confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃 되었습니다. 홈으로 이동합니다.");
    }
    navigate("/movie");
  };

  return (
    <header className="cgv-header">
      <div className="header-top">
        <Logo />
        <UserActions isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
      </div>
      <div className="navigation-search">
        <div>
          <Navigation />
          <Search />
        </div>
      </div>
    </header>
  );
}

export default Header;