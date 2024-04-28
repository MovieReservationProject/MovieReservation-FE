import React from "react";
import LoginPassword from "../../assets/png/loginPassword.png";
import LoginMember from "../../assets/png/loginMember.png";
import LoginCustomer from "../../assets/png/loginCustomer.png";
import LoginJoin from "../../assets/png/loginJoin.png";

function UserActions({ isLoggedIn, toggleLogin }) {
  return (
    <div className="user-actions">
      {isLoggedIn ? (
        <a href="#" onClick={toggleLogin}>
          <img src={LoginPassword} alt="로그아웃" />
          로그아웃
        </a>
      ) : (
        <>
          <a href="#">
            <img src={LoginMember} alt="로그인" />
            로그인
          </a>
          <a href="#">
            <img src={LoginJoin} alt="회원가입" />
            회원가입
          </a>
        </>
      )}
      <a href="#">
        <img src={LoginMember} alt="마이페이지" />
        마이페이지
      </a>
      <a href="#">
        <img src={LoginCustomer} alt="고객센터" />
        고객센터
      </a>
    </div>
  );
}

export default UserActions;
