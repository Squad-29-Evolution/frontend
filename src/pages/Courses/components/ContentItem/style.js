import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 880px;
  width: 100%;
  height: 230px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LinkContainer = styled(Link)`
  max-width: 220px;
  width: 100%;
  height: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: linear-gradient(180deg, #6b5a4c 99.99%, rgba(46, 46, 46, 0) 100%);
  text-decoration: none;
  cursor: pointer;
  padding: 10px 0;
`;

const ImgLink = styled.img`
  width: 120px;
  height: 131px;
  margin-bottom: 10px;
`;

const TitleLink = styled.p`
  font-family: "Metropolis", sans-serif;
  font-size: 1.25rem;
  color: #f1f1f1;
  text-align: center;
`;

const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 29px;

  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;

const TitleDescriptionContent = styled.h1`
  font-size: 1.25rem;
  color: #e5e5e5;
  font-weight: 600;
  font-family: "Metropolis", sans-serif;
  margin-bottom: 14px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const TextDescriptionContent = styled.p`
  font-family: "Metropolis", sans-serif;
  font-size: 1.15rem;
  color: #e5e5e5;
  line-height: 38.08px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const StatusView = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;

  @media (max-width: 530px) {
    width: 100%;
  }
`;

const BadgeStatus = styled.div`
  border: none;
  width: 110px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: ${(props) =>
    props.concluded == true ? "#16a085" : "rgba(85, 85, 85, 0.87)"};
  color: #e5e5e5;
  text-transform: uppercase;
  margin-bottom: 10px;

  @media (max-width: 530px) {
    width: 220px;
  }
`;

export default {
  Container,
  LinkContainer,
  ImgLink,
  TitleLink,
  DescriptionContent,
  TitleDescriptionContent,
  TextDescriptionContent,
  StatusView,
  BadgeStatus,
};
