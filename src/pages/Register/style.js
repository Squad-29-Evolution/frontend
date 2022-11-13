import styled from "styled-components";
import OrangeKawaii2 from "../../assets/orange_kawaii_2.svg";
import OrangeKawaii from "../../assets/orange_kawaii.svg";
import StickyTape2 from "../../assets/sticky-tape-2.svg";
import StickyTape from "../../assets/sticky-tape.svg";

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #2e2e2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const OrangeKawaii2BG = styled.div`
  position: absolute;
  background-image: url(${OrangeKawaii2});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  width: 256px;
  height: 256px;
  right: 4%;
  top: 7%;
  transform: rotate(-22.6deg);

  @media (max-width: 1366px) {
    width: calc(256px / 1.5);
    height: calc(256px / 1.5);
  }

  @media (max-width: 885px) {
    width: calc(256px / 2);
    height: calc(256px / 2);
  }
`;

const StickyTape2BG = styled.div`
  position: absolute;
  background-image: url(${StickyTape2});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  width: 129.5px;
  height: 128px;
  right: 31%;
  bottom: 30%;
  opacity: 60%;

  @media (max-width: 1366px) {
    width: calc(129.5px / 1.5);
    height: calc(128px / 1.5);
  }

  @media (max-width: 885px) {
    width: calc(129.5px / 2);
    height: calc(128px / 2);
  }
`;

const StickyTapeBG = styled.div`
  position: absolute;
  background-image: url(${StickyTape});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  width: 131px;
  height: 128px;
  left: 5%;
  top: 29%;
  opacity: 40%;

  @media (max-width: 1366px) {
    width: calc(131px / 1.5);
    height: calc(128px / 1.5);
  }

  @media (max-width: 885px) {
    width: calc(131px / 2);
    height: calc(128px / 2);
  }
`;

const OrangeKawaiiBG = styled.div`
  position: absolute;
  background-image: url(${OrangeKawaii});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  width: 143.81px;
  height: 143.81px;
  left: 24%;
  bottom: 18%;
  transform: rotate(30.14deg);
  opacity: 80%;

  @media (max-width: 1366px) {
    width: calc(143.81px / 1.5);
    height: calc(143.81px / 1.5);
    opacity: 60%;
  }

  @media (max-width: 885px) {
    width: calc(143.81px / 2);
    height: calc(143.81px / 2);
    opacity: 40%;
  }
`;

const Title = styled.h1`
  font-family: "Metropolis", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #e5e5e5;
  margin-bottom: 19px;
`;

export default {
  Container,
  Header,
  Logo,
  OrangeKawaii2BG,
  StickyTape2BG,
  StickyTapeBG,
  OrangeKawaiiBG,
  Title,
};
