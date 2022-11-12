import styled, { css } from "styled-components";

const headerCss = css`
  width: 100%;
  height: 76px;
  background: #2e2e2e;
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

const Logo = styled.div`
  max-width: 71px;
  max-height: 52px;

  & img {
    width: 100%
    height: 100%
}
`;

export default { Container, FixedHeader, Logo };
