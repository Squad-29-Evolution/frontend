import styled from "styled-components";
import Student from "../../assets/student.svg";
import Persons from "../../assets/persons.svg";
import PersonWithNot from "../../assets/personWithNot.svg";
import DateIcon from "../../assets/date.svg";

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

const StudentBG = styled.div`
  position: absolute;
  background-image: url(${Student});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  width: 290px;
  height: 210px;
  right: 4%;
  top: 7%;

  @media (max-width: 1366px) {
    width: calc(290px / 1.5);
    height: calc(210px / 1.5);
  }

  @media (max-width: 885px) {
    width: calc(290px / 2);
    height: calc(210px / 2);
  }
`;

const PersonsBG = styled.div`
  position: absolute;
  background-image: url(${Persons});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  width: 280px;
  height: 180px;
  right: 5%;
  bottom: 7%;

  @media (max-width: 1366px) {
    width: calc(280px / 1.5);
    height: calc(180px / 1.5);
  }

  @media (max-width: 885px) {
    width: calc(280px / 2);
    height: calc(180px / 2);
  }
`;

const PersonWithNotBG = styled.div`
  position: absolute;
  background-image: url(${PersonWithNot});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  width: 280px;
  height: 180px;
  left: 3%;
  top: 29%;

  @media (max-width: 1366px) {
    width: calc(280px / 1.5);
    height: calc(180px / 1.5);
  }

  @media (max-width: 885px) {
    width: calc(280px / 2);
    height: calc(180px / 2);
  }
`;

const DateBG = styled.div`
  position: absolute;
  background-image: url(${DateIcon});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  width: 99px;
  height: 99px;
  left: 24%;
  bottom: 21%;

  @media (max-width: 1366px) {
    width: calc(99px / 1.5);
    height: calc(99px / 1.5);
  }

  @media (max-width: 885px) {
    width: calc(99px / 2);
    height: calc(99px / 2);
  }
`;

export default {
  Container,
  BackgroundLinear,
  Header,
  Logo,
  StudentBG,
  PersonsBG,
  PersonWithNotBG,
  DateBG,
};
