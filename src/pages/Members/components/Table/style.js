import styled from "styled-components";

const ContainerOverFlow = styled.div`
  width: 100%;
  height: 100%;
`;

const Table = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    180deg,
    #6b5a4c 30.21%,
    rgba(46, 46, 46, 0) 45.83%
  );
  border-radius: 10px;
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  border-bottom: 1px solid #b3b3b3;
  align-items: center;
`;

const HRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Htext = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
  color: #f1f1f1;
`;

const Body = styled.div`
  width: 100%;
  display: grid;
  //flex-direction: column;
`;

const BRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #b3b3b3;
  border-bottom: 1px solid #b3b3b3;
`;

const BContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5px;

  &.middle {
    border-left: 2px solid #b3b3b3;
    border-right: 2px solid #b3b3b3;
  }

  &.flexStart {
    justify-content: flex-start;
  }
`;

const Btext = styled.p`
  color: #e5e5e5;
  font-weight: 600;
  font-size: 1.1rem;
`;

const ContentPicture = styled.div`
  background-color: #ccc1f0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 5px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2px;
`;

const Span = styled.span`
  font-weight: 400;
  color: #e5e5e5;
`;

const NotUsers = styled.div`
  height: 50px;
  width: 100%;
  padding: 10px;
  & p {
    color: #e5e5e5;
    font-size: 1.2rem;
  }
`;

export default {
  ContainerOverFlow,
  Table,
  Header,
  HRow,
  Htext,
  Body,
  BRow,
  BContent,
  ContentPicture,
  Btext,
  ContentInfo,
  Span,
  NotUsers,
};
