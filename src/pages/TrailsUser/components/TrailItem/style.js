import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  width: 80%;

  @media (max-width: 530px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 29px;

  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

const StatusView = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 530px) {
    margin-bottom: 15px;
  }
`;

const TitleStatus = styled.h1`
  font-family: "Metropolis", sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  color: #e5e5e5;
  margin-right: 10px;
`;

const Percent = styled.p`
  font-size: 1.15rem;
  font-family: "Metropolis", sans-serif;
  color: #e5e5e5;
`;

const Button = styled.button`
  background: #16a085;
  text-transform: uppercase;
  color: #e5e5e5;
  padding: 10px 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 530) {
    width: 100%;
  }
`;

export default { Container, Content, StatusView, TitleStatus, Percent, Button };
