import React, { useState } from "react";
import "./Header.css";
import Logo from "./Logo";
import UserActions from "./UserActions";
import Navigation from "./Navigation";
import Search from "./Search";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
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
