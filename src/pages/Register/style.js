import styled from "styled-components";

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #2e2e2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
  width: 100%;
  height: 50px;
  z-index: 1;
  position: absolute;
  inset: 0;
`;

const Logo = styled.div`
  margin: 11px 0 0 142px;
  width: 71px;
  height: 52px;
  & img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 800px) {
    margin: 10px;
  }
`;

const Title = styled.h1`
  font-family: "Metropolis", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #e5e5e5;
  margin-bottom: 19px;
`;

export default { Container, Header, Logo, Title };
