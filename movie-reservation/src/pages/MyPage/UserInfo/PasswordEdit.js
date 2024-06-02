import React, { useState } from "react";

function PasswordEdit({ onPasswordChange }) {
  const [isPasswordEdit, setIsPasswordEdit] = useState(false);
  const [newPassword, setNewPassword] = useState(""); // 새로운 비밀번호를 상태로 관리

  const handlePasswordEditClick = () => {
    if (isPasswordEdit) {
      onPasswordChange(newPassword); // 새 비밀번호를 상위 컴포넌트로 전달
      setNewPassword(""); // 새 비밀번호 상태 초기화
    }
    setIsPasswordEdit(!isPasswordEdit); // 비밀번호 편집 상태 토글
  };

  const handlePasswordInput = (e) => {
    setNewPassword(e.target.value); // 입력된 새 비밀번호를 상태에 저장
  };

  return (
    <tr className="password-row">
      <td className="password-label">비밀번호</td>
      <td className="password-value">
        <div className="password-input-wrap">
          <p>********</p>
          <button
            className="password-edit-btn"
            onClick={handlePasswordEditClick}
          >
            {isPasswordEdit ? "취소" : "변경"}
          </button>
        </div>
        <div>
          {isPasswordEdit && (
            <div className="password-input-container">
              <input
                type="password"
                className="password-input-field"
                placeholder="비밀번호를 입력해주세요"
                value={newPassword}
                onChange={handlePasswordInput}
              />
              <span>
                <small>
                  영문자, 숫자, 특수문자 조합하여 8~12자리여야 합니다.
                </small>
              </span>
              <span>
                <small>
                  사용 가능 특수문자 : !"#$%&amp;'()*+,-./:;&lt;=&gt;?@[]^_`
                  {"{|}"}~
                </small>
              </span>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default PasswordEdit;
