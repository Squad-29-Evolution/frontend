import styled, { css } from "styled-components";

const buttonLine = css`
  position: absolute;
  content: "";
  width: 30px;
  height: 4px;
  border-radius: 2px;
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
    background: ${({ admin }) => (admin ? "#2e2e2e" : "#fff")};
  }
  &::before {
    ${buttonLine}
    top: 0;
    background: ${({ admin }) => (admin ? "#2e2e2e" : "#fff")};
  }
  &::after {
    ${buttonLine};
    bottom: 0;
    background: ${({ admin }) => (admin ? "#2e2e2e" : "#fff")};
  }
  @media (max-width: 860px) {
    display: block;
  }
`;

export default { Button };
