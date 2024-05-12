import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import PhoneNumberEdit from "./PhoneNumberEdit";
import PasswordEdit from "./PasswordEdit";

function PersonalInfo() {
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [showPasswordChangedAlert, setShowPasswordChangedAlert] =
    useState(false);
  const userName = useSelector((state) => state.reservation.selectmovie);
  const userId = useSelector((state) => state.reservation.selectcinema);
  const userNum = useSelector((state) => state.reservation.selectcinematype);
  const selectdate = useSelector((state) => state.reservation.selectdate);
  const userDate = dayjs(selectdate).format("YYYY-MM-DD");
  const [userInfo, setUserInfo] = useState({
    name: "",
    myId: "",
    birthday: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const storedUserInfo = sessionStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    } else {
      fetchUserInfo();
    }
  }, []);

  const userdata = {
    name: userName,
    myId: userId,
    birthday: userDate,
    phoneNumber: userNum,
  };

  console.log("userdata", userdata);
  console.log(JSON.stringify(userdata));

  const clickreservehandler = async () => {
    const token = sessionStorage.getItem("Token");
    console.log("Token", token);
    if (!token) {
      console.log("Token not found");
      return; // 토큰이 없으면 여기서 함수 실행을 멈춥니다.
    }
    try {
      const response = await fetch("http://3.37.251.140:8080/mypage/userInfo", {
        method: "POST",
        headers: {
          Authorization: token, // "Authorization" 헤더에 동적으로 토큰을 추가
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });

      if (!response.ok) {
        throw new Error("error");
      }
    } catch (error) {
      console.log("오류발생!!:", error);
    }
  };
  const fetchUserInfo = async () => {
    try {
      const response = await fetch("http://3.37.251.140:8080/mypage/userInfo", {
        method: "GET",
      });
      const data = await response.json();
      setUserInfo({ ...data });
    } catch (error) {
      console.error("사용자 정보 가져오기 실패:", error);
    }
  };

  const updateUserInfo = async () => {
    const response = await fetch("http://3.37.251.140:8080/mypage/userInfo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (response.ok) {
      alert("사용자 정보가 업데이트되었습니다.");
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo)); // 세션 스토리지 업데이트
    }
  };

  const handleConfirmClick = () => {
    if (isPasswordChanged) {
      alert("비밀번호가 변경되었습니다.");
      setShowPasswordChangedAlert(true);
      setTimeout(() => setShowPasswordChangedAlert(false), 3000);
    }
    updateUserInfo();
  };

  const handlePasswordChange = () => {
    setIsPasswordChanged(true);
  };

  return (
    <div className="profile-settings-container">
      <h2 className="settings-title">개인정보변경</h2>
      <p className="settings-description">
        회원님의 소중한 정보를 안전하게 관리하세요.
      </p>
      <div className="settings-box">
        <table className="settings-table">
          <tbody>
            <tr className="settings-row">
              <td className="settings-label">이름</td>
              <td className="settings-value">
                <p>{userInfo.name}</p>
              </td>
            </tr>
            <tr className="settings-row">
              <td className="settings-label">아이디</td>
              <td className="settings-value">
                <p>{userInfo.myId}</p>
              </td>
            </tr>
            <tr className="settings-row">
              <td className="settings-label">생년월일</td>
              <td className="settings-value">
                <p>{userInfo.birthday} </p>
              </td>
            </tr>
            <PhoneNumberEdit userInfo={userInfo} setUserInfo={setUserInfo} />
            <PasswordEdit onPasswordChange={handlePasswordChange} />
          </tbody>
        </table>
        <div className="settings-btn">
          <button className="settings-cancle-btn">취소</button>
          <button className="settings-ok-btn" onClick={clickreservehandler}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
