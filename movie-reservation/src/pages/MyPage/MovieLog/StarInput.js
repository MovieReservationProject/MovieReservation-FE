import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
  font-size: 2.5rem;
  color: lightgray;

  ${({ isHalf }) =>
    isHalf &&
    css`
      position: absolute;
      width: 20px;
      overflow: hidden;

      &:nth-of-type(10) {
        transform: translate(-180px); 
      }
      &:nth-of-type(8) {
        transform: translate(-140px); 
      }
      &:nth-of-type(6) {
        transform: translate(-100px); 
      }
      &:nth-of-type(4) {
        transform: translate(-60px); 
      }
      &:nth-of-type(2) {
        transform: translate(-20px); 
    `}
`;

const StarInput = ({ onClickRating, value, isHalf, currentRating }) => {
  return (
    <>
      <Input type="radio" name="rating" id={`star${value}`} value={value} />
      <Label
        onClick={() => onClickRating(value)}
        isHalf={isHalf}
        htmlFor={`star${value}`}
        style={{ color: value <= currentRating ? "orange" : "lightgray" }} // 현재 별점에 따라 색상 변경
      >
        {isHalf ? <FaStarHalf /> : <FaStar />}
      </Label>
    </>
  );
};

export default StarInput;
