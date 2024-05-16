import React, { useRef, useState, useEffect } from "react";
import "./SignIn.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Edit from "../../assets/png/edit.png";
import Arrow from "../../assets/png/arrow.png";
import Check from "../../assets/png/check.png";
import View from "../../assets/png/view.png";
import Hide from "../../assets/png/hide.png";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const date = new Date();
  const [userDate, setUserDate] = useState(date);
  const [userNum, setUserNum] = useState("");

  const [showPwd, setShowPwd] = useState(false);
  const handleShowPwd = (event) => {
    event.preventDefault();
    setShowPwd(!showPwd);
  };

  let navigate = useNavigate();

  const nameFocus = useRef();

  useEffect(() => {
    nameFocus.current.focus();
  }, []);

  const handleSignIn = async (event) => {
    event.preventDefault();
    const payload = {
      name: userName,
      myId: userId,
      password: userPwd,
      birthday: userDate,
      phoneNumber: userNum,
    };

    try {
      const response = await fetch("http://3.37.251.140:8080/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (
        userName != "" &&
        userId == "" &&
        userPwd == "" &&
        userDate == "" &&
        userNum == ""
      ) {
        if (response.ok) {
          const contentType = response.headers.get("Content-Type");
          if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            if (response.status === 200) {
              alert(
                userId +
                  "님, 회원가입이 완료되었습니다. 로그인 페이지로 이동합니다."
              );
              navigate("/login");
            } else if (response.status === 400) {
              alert("회원가입에 실패했습니다.");
            }
          } else {
            throw new Error("서버에서 JSON 형식의 응답을 반환하지 않았습니다.");
          }
        } else {
          throw new Error("서버 요청 실패: " + response.status);
        }
      } else {
        alert("모든 입력값을 작성해주세요.");
        nameFocus.current.focus();
      }
    } catch (error) {
      console.error("오류가 발생했습니다. 오류명: ", error);
    }
  };

  return (
    <>
      <Header />
      <h1 className="signin-title">회원가입</h1>
      <div className="signin-icon">
        <div>
          <img src={Edit} className="eachicon" />
          <p className="icon-txt-input">회원정보 입력</p>
        </div>
        <img src={Arrow} className="eachicon" />
        <div>
          <img src={Check} className="eachicon" />
          <p className="icon-txt-complete">회원가입 완료</p>
        </div>
      </div>
      <form onSubmit={handleSignIn} className="input-form">
        <div className="user-info">
          <span className="user-info-txt">이름</span>
          <input
            id="u_name"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="이름을 입력해주세요"
            className="user-info-input"
            ref={nameFocus}
            required
          />
        </div>
        <div className="user-info">
          <span className="user-info-txt">ID</span>
          <input
            id="u_id"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="사용할 ID를 입력해주세요"
            className="user-info-input"
            required
          />
          {/* <button className="idcheck-btn">아이디 중복확인</button> */}
        </div>
        <div className="user-info">
          <span className="user-info-txt">비밀번호</span>
          <input
            id="u_pwd"
            type={showPwd ? "text" : "password"}
            minLength="8"
            maxLength="12"
            value={userPwd}
            onChange={(e) => setUserPwd(e.target.value)}
            placeholder="8~12자리로 입력해주세요"
            className="user-info-input"
            required
          />
          <button className="pwd-btn" onClick={handleShowPwd}>
            {showPwd ? (
              <img src={Hide} className="pwd-icon" />
            ) : (
              <img src={View} className="pwd-icon" />
            )}
          </button>
        </div>
        <div className="user-info">
          <span className="user-info-txt">생년월일</span>
          <input
            id="u_date"
            type="date"
            value={userDate}
            onChange={(e) => setUserDate(e.target.value)}
            className="user-info-input"
            required
          />
        </div>
        <div className="user-info">
          <span className="user-info-txt">휴대폰번호</span>
          <input
            id="u_phone"
            type="text"
            value={userNum}
            onChange={(e) => setUserNum(e.target.value)}
            placeholder="-을 제외하고 입력해주세요"
            className="user-info-input"
            required
          />
        </div>
        <button type="submit" className="signin-btn" onClick={handleSignIn}>
          회원가입
        </button>
        <div className="signin-footer">
          <span className="footer-txt">이미 회원이신가요?</span>
          <button className="login-btn" onClick={() => navigate("/login")}>
            로그인
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default SignIn;
