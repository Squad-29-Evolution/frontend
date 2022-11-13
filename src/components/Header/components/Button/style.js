import styled, { css } from "styled-components";

const buttonLine = css`
  position: absolute;
  content: "";
  width: 30px;
  height: 4px;
  border-radius: 2px;
  background: #2e2e2e;
  left: 0;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  position: relative;
  border: none;
  background-color: transparent;
  display: none;
  cursor: pointer;

  & div {
    ${buttonLine};
    top: 50%;
    transform: translatey(-50%);
  }
  &::before {
    ${buttonLine}
    top: 0;
  }
  &::after {
    ${buttonLine};
    bottom: 0;
  }
  @media (max-width: 860px) {
    display: block;
  }
`;

export default { Button };
