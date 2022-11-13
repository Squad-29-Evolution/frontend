import styled from "styled-components";

const WrapperCount = styled.div`
  width: 100%;
  background: rgba(85, 85, 85, 0.87);
  border-radius: 20px;
  height: 62px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;

const CountBlock = styled.div`
  width: 100%;
  height: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.middle {
    border-left: 1px solid #000000;
    border-right: 1px solid #000000;
  }
`;

const Number = styled.p`
  font-weight: 600;
  color: #e5e5e5;
`;

const Text = styled.p`
  font-weight: 400;
  color: #e5e5e5;
  margin-top: 5px;
`;

export default {
  WrapperCount,
  CountBlock,
  Number,
  Text,
};
