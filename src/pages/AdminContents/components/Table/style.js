import styled from "styled-components";
import MoreIcon from "../../../../assets/more.svg";

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
    rgb(46 46 46 / 54%) 69.83%
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
  position: relative;
  flex: 1;

  &.middle {
    border-left: 2px solid #b3b3b3;
    border-right: 2px solid #b3b3b3;
  }

  &.middle-left {
    border-right: 2px solid #b3b3b3;
  }
`;

const Btext = styled.p`
  color: #e5e5e5;
  font-weight: 600;
  font-size: 1.1rem;
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2px;

  &.link {
    flex-direction: row;

    & p {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 0.9rem;
    }
  }
`;

const Span = styled.div`
  color: #e5e5e5;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const NotContent = styled.div`
  height: 50px;
  width: 100%;
  padding: 10px;
  & p {
    color: #e5e5e5;
    font-size: 1.2rem;
  }
`;

const ButtonMore = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  right: 5px;
  background: url(${MoreIcon});
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 5px;
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
  Btext,
  ContentInfo,
  NotContent,
  ButtonMore,
  Span,
};
