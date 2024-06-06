import React from "react";
import { Link } from "react-router-dom";
import LoginPassword from "../../assets/png/loginPassword.png";
import LoginMember from "../../assets/png/loginMember.png";
import LoginCustomer from "../../assets/png/loginCustomer.png";
import LoginJoin from "../../assets/png/loginJoin.png";

function UserActions({ isLoggedIn, toggleLogin }) {
  return (
    <div className="user-actions">
      {isLoggedIn ? (
        <a href="/" onClick={toggleLogin}>
          <img src={LoginPassword} alt="로그아웃" />
          로그아웃
        </a>
      ) : (
        <>
          <a href="/login">
            <img src={LoginMember} alt="로그인" />
            로그인
          </a>
          <a href="/signin">
            <img src={LoginJoin} alt="회원가입" />
            회원가입
          </a>
        </>
      )}
      <Link to="/mypage">
        <img src={LoginMember} alt="마이페이지" />
        마이페이지
      </Link>
      <Link to="/Customer-Service">
        <img src={LoginCustomer} alt="고객센터" />
        고객센터
      </Link>
    </div>
  );
}

export default UserActions;
