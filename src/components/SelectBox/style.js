import styled from "styled-components";
import ArrowDown from "../../assets/arrow-down.svg";

const SelectBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;

  & p {
    width: 100%;
    height: 100%;
  }
`;

const Radio = styled.input`
  display: none;
`;

const Option = styled.label`
  padding: 12px 24px;
  cursor: pointer;
  display: flex;
  width: 100%;
  flex-direction: column;

  &:hover {
    background: #ebebeb;
    color: #000;
    font-weight: 500;
  }
`;

const Selected = styled.div`
  background: #1e1e1ef7;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  margin-bottom: 8px;
  color: #f5f6fa;
  position: relative;
  order: 0;
  padding: 12px 24px;
  cursor: pointer;

  &:after {
    content: "";
    background: url(${ArrowDown});
    background-size: contain;
    background-repeat: no-repeat;

    position: absolute;
    height: 100%;
    width: 32px;
    right: 10px;
    top: 5px;

    transition: all 0.4s;
  }
`;

const OptionsContaine = styled.div`
  background: #2e2e2ea3;
  color: #f5f6fa;
  max-height: 0;
  width: 100%;
  opacity: 0;
  transition: all 0.4s;
  border-radius: 8px;
  overflow: hidden;
  order: 1;

  &.active {
    max-height: 100px;
    opacity: 1;
    overflow-y: scroll;

    & + ${Selected}:after {
      transform: rotateX(180deg);
      top: -6px;
    }
  }

  &::-webkit-scrollbar {
    width: 8px;
    background: #0d141f;
    border-radius: 0 8px 8px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: #2e2e2ea3;
    border-radius: 0 8px 8px 0;
  }
`;

export default {
  SelectBox,
  Radio,
  Option,
  OptionsContaine,
  Selected,
};
