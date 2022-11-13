import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Link)`
  max-width: 243px;
  width: 100%;
  height: 189px;
  background: linear-gradient(180deg, #6b5a4c 99.99%, rgba(46, 46, 46, 0) 100%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const Title = styled.p`
  font-size: 1.25rem;
  font-family: "Metropolis", sans-serif;
  color: #f1f1f1;
`;

const Progress = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  background: rgba(46, 46, 46, 0.65);
  border-radius: 20px;
  margin-bottom: 10px;
`;

const ProgressBarLevel = styled.div`
  position: absolute;
  z-index: 1;
  background: linear-gradient(180deg, #ff5a23 15.1%, #ffa000 100%);
  border-radius: 20px;
  padding: 5px 0;
  width: ${(props) => props.width}%;
`;

const ProgressTextIndicator = styled.p`
  font-size: 0.625rem;
  color: #f1f1f1;
  font-family: "Metropolis", sans-serif;
`;

export default {
  Container,
  Icon,
  Title,
  Progress,
  ProgressBarLevel,
  ProgressTextIndicator,
};
