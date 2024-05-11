import React, { useState } from "react";
import "./Login.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import User from "../../assets/png/user.png";
import Line from "../../assets/png/line.png";
import Lock from "../../assets/png/lock.png";
import View from "../../assets/png/view.png";
import Hide from "../../assets/png/hide.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(true);
  };

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loginCheck, setLoginCheck] = useState(false);

  const [showPwd, setShowPwd] = useState(false);
  const handleShowPwd = (event) => {
    event.preventDefault();
    setShowPwd(!showPwd);
  };

  let navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));

    const response = await fetch("http://3.37.251.140:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        myId: userId,
        password: password,
      }),
    });
    const result = await response.json();

    if (response.status === 200) {
      setLoginCheck(false);
      sessionStorage.setItem("myId", userId);

      console.log("로그인성공, 아이디: " + userId);
      alert("로그인이 완료되었습니다. 홈으로 이동합니다.");
      navigate("/movie");
    } else {
      alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
      setLoginCheck(true);
    }
  };

  return (
    <>
      <Header />
      <h3 className="login-top-text">
        아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.
      </h3>
      <form onSubmit={handleLogin} className="login-form">
        <div className="login-form-id">
          <img src={User} className="login-icon" />
          <img src={Line} className="login-icon" />
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="id"
            className="login-form-input"
          />
        </div>
        <div className="login-form-pwd">
          <img src={Lock} className="login-icon" />
          <img src={Line} className="login-icon" />
          <input
            type={showPwd ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="login-form-input"
          />
          <button className="pwd-btn" onClick={handleShowPwd}>
            {showPwd ? (
              <img src={Hide} className="login-pwd-icon" />
            ) : (
              <img src={View} className="login-pwd-icon" />
            )}
          </button>
        </div>
        <button type="submit" className="login-button" onClick={handleLogin}>
          로그인
        </button>
      </form>

      <div className="login-bottom">
        <h4 className="bottom-txt">회원이 아니신가요?</h4>
        <button
          className="login-signin-btn"
          onClick={() => navigate("/signin")}
        >
          회원가입
        </button>
        <button className="login-membership-btn" onClick={showModal}>
          멤버십이란?
        </button>
        {modal == true ? <Modal setModal={setModal} /> : null}
      </div>
      <Footer />
    </>
  );
}

function Modal({ setModal }) {
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <p className="modal-title">
          <span className="modal-highlight">최대 5%</span> 포인트 적립
        </p>
        <p className="modal-txt">
          구매 시 결제금액의 0.1~5%까지 포인트 적립해 드려요.
        </p>
      </div>
      <div className="modal-content">
        <p className="modal-title">
          <span className="modal-highlight">최대 2배</span> 보너스포인트 추가
          적립
        </p>
        <p className="modal-txt">
          매월 4회 이용 시 50%, 5회 이용 시 100%의 추가 보너스포인트를 드려요.
        </p>
      </div>
      <div className="modal-content">
        <p className="modal-title">
          <span className="modal-highlight">현금처럼 사용하는</span> 포인트
        </p>
        <p className="modal-txt">
          적립한 포인트는 1,000P부터 현금처럼 결제가 가능해요.
        </p>
      </div>
      <div className="modal-content">
        <p className="modal-title">
          회원끼리 <span className="modal-highlight">포인트 선물하기</span>
        </p>
        <p className="modal-txt">
          가족, 친구에게 포인트 선물하고 행복을 나누세요.
        </p>
      </div>
      <button className="modal-btn" onClick={closeModal}>
        닫기
      </button>
    </div>
  );
}

export default Login;
