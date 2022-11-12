import styled from "styled-components";
import { Link } from "react-router-dom";

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

const ContentBox = styled.main`
  background: linear-gradient(
    180deg,
    rgba(107, 90, 76, 0.93) 66.15%,
    rgba(46, 46, 46, 0) 100%
  );
  border-radius: 10px;
  max-width: 739px;
  width: 100%;
  height: 500px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

const Text = styled.p`
  font-family: "Metropolis", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  color: #e5e5e5;
  text-align: center;
  padding: 20px;
`;

const BackButton = styled(Link)`
  font-family: "Metropolis", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  color: #e5e5e5;
  text-decoration: none;
  background: linear-gradient(180deg, #ff8408 0%, #ff5c23 100%);
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
`;

export default {
  Container,
  BackgroundLinear,
  Header,
  Logo,
  ContentBox,
  Text,
  BackButton,
};
