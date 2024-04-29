import React from "react";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="/home">영화</a>
        </li>
        <li>
          <a href="/reservation">예매</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
