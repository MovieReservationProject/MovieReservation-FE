import styled from "@emotion/styled";
import { useState } from "react";
import StarInput from "./StarInput";

const Base = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  margin-top: 10px;
`;

const RatingValue = styled.span`
  font-size: 1.4rem;
  line-height: 100%;
  margin-left: 8px;
`;

const RatingField = styled.fieldset`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  border: none;
  transform: translateY(2px);

  input:checked ~ label,
  label:hover,
  label:hover ~ label {
    transition: 0.2s;
    color: orange;
  }
`;

// StarRating 컴포넌트에서 StarInput에 현재 선택된 별점 상태(localRating) 전달
function StarRating({ setRating }) {
  const [localRating, setLocalRating] = useState(0);

  const handleClickRating = (value) => {
    setLocalRating(value);
    setRating(value);
  };

  return (
    <Base>
      <RatingField>
        {[...Array(10)].map((_, index) => {
          const value = 5 - index * 0.5;
          return (
            <StarInput
              key={value}
              onClickRating={handleClickRating}
              value={value}
              isHalf={value % 1 !== 0}
              currentRating={localRating} // 현재 선택된 별점 상태 전달
            />
          );
        })}
      </RatingField>
      <RatingValue>{localRating}</RatingValue>
    </Base>
  );
}

export default StarRating;
