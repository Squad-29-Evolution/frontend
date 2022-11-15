import styled from "styled-components";

const Container = styled.button`
  max-width: 243px;
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
  overflow: hidden;
  padding: 5px 0;

  @media (max-width: 530px) {
    width: 150px;
    height: 150px;
  }
`;

const Img = styled.img`
  width: 120px;
  height: 131px;
  margin-bottom: 10px;

  @media (max-width: 530px) {
    width: 100px;
    height: 100px;
  }
`;

const Title = styled.p`
  font-family: "Metropolis", sans-serif;
  font-size: 1.25rem;
  color: #f1f1f1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default { Container, Img, Title };
