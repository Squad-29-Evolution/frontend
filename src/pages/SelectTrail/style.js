import styled, { css } from "styled-components";
import BGImg from "../../assets/bg.png";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const BG = styled.div`
  position: absolute;
  background-image: url(${BGImg});
  width: 100%;
  height: 100%;
  inset: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Header = styled.div`
  width: 100%;
  height: 72px;
  z-index: 2;
  position: relative;
  padding: 10px;
`;

const Icon = styled.div`
  height: 52px;
  width: 72px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const Main = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 72px);
`;

const WrapperGeneric = styled.div`
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
  margin: 10px;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  color: #e5e5e5;
  margin: 0 0 20px 30px;
`;

const WrapperTrail = styled.div`
  background: linear-gradient(
    180deg,
    rgba(30, 30, 30, 0.92) 94.27%,
    rgb(30 30 30 / 79%) 100%
  );
  border: 1px solid #1e1e1e;
  width: 100%;
  max-width: 1000px;
  height: 424px;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const ContentBorder = css`
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  border: 1px solid transparent;
  box-sizing: border-box;
  border-radius: 4px;
`;

const ContentBorderHover = css`
  height: 100%;
  width: 100%;
  border: 2px solid #ffffff;
  transition: height 0.1s linear, width 0.1s linear 0.1s;
`;

const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 5px;

  &:before {
    ${ContentBorder}
    bottom: 0;
    left: 0;
  }

  &:after {
    ${ContentBorder}
    top: 0;
    right: 0;
  }

  &:hover::before {
    ${ContentBorderHover}
    border-right: none;
    border-bottom: none;
  }

  &:hover::after {
    ${ContentBorderHover}
    border-left: none;
    border-top: none;
  }
`;

const ContentImg = styled.img`
  width: 150px;
  height: 150px;

  @media (max-width: 800px) {
    width: 100px;
    height: 100px;
  }
`;

const ContentName = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
  color: #f1f1f1;
  margin-top: 5px;
`;

export default {
  Container,
  BG,
  WrapperTrail,
  Main,
  Header,
  Icon,
  WrapperGeneric,
  Title,
  CardContent,
  ContentName,
  ContentImg,
};
