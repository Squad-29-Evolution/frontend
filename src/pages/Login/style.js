import styled from "styled-components";

const Container = styled.section`
  background-color: #2e2e2e;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundLinear = styled.div`
  width: 100%;
  height: 60%;
  background: linear-gradient(180deg, #ff8507 0%, #ff5a23 100%);
  position: absolute;
  z-index: 0;
  inset: 0;
`;

const Header = styled.header`
  width: 100%;
  height: 50px;
  z-index: 1;
  position: absolute;
  inset: 0;
`;

const Logo = styled.div`
  margin: 10px;
  width: 71px;
  height: 52px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export default { Container, BackgroundLinear, Header, Logo };
