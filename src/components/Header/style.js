import styled, { css } from "styled-components";

const headerCss = css`
  width: 100%;
  height: 76px;
  background-color: transparent;
  z-index: 3;
`;

const Container = styled.header`
  ${headerCss}
`;

const FixedHeader = styled.div`
  ${headerCss}
  padding: 15px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Generic = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  max-width: 71px;
  max-height: 52px;
  margin-left: 20px;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
  }

  & a {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
  }

  @media (max-width: 800px) {
    max-width: 51px;
    max-height: 50px;
  }
`;

export default { Container, FixedHeader, Logo, Generic };
