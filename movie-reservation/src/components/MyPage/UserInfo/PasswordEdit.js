import React, { useState } from "react";

function PasswordEdit() {
  const [isPasswordEdit, setIsPasswordEdit] = useState(false);

  const handlePasswordEditClick = () => {
    setIsPasswordEdit(!isPasswordEdit);
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
