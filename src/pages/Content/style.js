import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #2e2e2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const Content = styled.section`
  max-width: 840px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media (max-width: 870px) {
    padding: 0 25px;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 78px;
`;

const Img = styled.img`
  height: 128px;
  width: 128px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-family: "Metropolis", sans-serif;
  font-weight: 700;
  color: #e5e5e5;
  text-align: center;
`;

const TitleDescription = styled.h2`
  font-size: 1.25rem;
  font-family: "Metropolis", sans-serif;
  font-weight: 600;
  color: #e5e5e5;
  margin-bottom: 7px;
`;

const Description = styled.p`
  font-size: 1.15rem;
  font-family: "Metropolis", sans-serif;
  color: #e5e5e5;
  line-height: 2rem;
`;

const Table = styled.table`
  max-width: 739px;
  width: 100%;
  border: 2px solid #bfbfbf;
  margin: 20px 0 41px;
  background: rgba(85, 85, 85, 0.87);
  table-layout: fixed;
`;

const HeaderTable = styled.th`
  font-size: 1.25rem;
  font-family: "Metropolis", sans-serif;
  font-weight: 600;
  padding: 20px 0 21px 20px;
  color: #e5e5e5;
  text-align: initial;
`;

const ContentTable = styled.td`
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 2px solid #bfbfbf;
  overflow: hidden;
  white-space: nowrap;
`;

const TRTable = styled.tr`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ImgLink = styled.img`
  height: 34px;
  width: 34px;
  padding: 0 8px 0 10px;
`;

const TextContentTable = styled.a`
  font-size: 1.15rem;
  font-family: "Metropolis", sans-serif;
  color: #e5e5e5;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonConcluded = styled.button`
  width: 155px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.concluded
      ? "#505050"
      : "linear-gradient(180deg, #ff8408 0%, #ff5c23 100%)"};
  border-radius: 5px;
  align-self: center;
  cursor: ${(props) => (props.concluded ? "not-allowed" : "pointer")};
  border: ${({ concluded }) => (concluded ? "2px solid #ff621f" : "none")};
`;

const TextButtonConcluded = styled.p`
  font-family: "Metropolis", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #e5e5e5;
`;

export default {
  Container,
  Content,
  Description,
  Header,
  Img,
  Title,
  TitleDescription,
  Table,
  HeaderTable,
  ContentTable,
  TRTable,
  ImgLink,
  TextContentTable,
  ButtonConcluded,
  TextButtonConcluded,
};
