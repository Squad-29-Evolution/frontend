import styled from "styled-components";

const Container = styled.div`
  max-width: 512px;
  width: 100%;
  height: 189px;
  border-radius: 10px;
  background: linear-gradient(180deg, #6b5a4c 99.99%, rgba(46, 46, 46, 0) 100%);
  padding: 16px 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RowLevels = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TextLevel = styled.p`
  font-size: 1.3125rem;
  color: #e5e5e5;
  font-family: "Metropolis", sans-serif;
  font-weight: 600;
`;

const Progress = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  background: rgba(46, 46, 46, 0.65);
  border-radius: 20px;
  margin-bottom: 10px;
`;

const ProgressBarLevel = styled.div`
  position: absolute;
  z-index: 1;
  background: linear-gradient(180deg, #ff5a23 15.1%, #ffa000 100%);
  border-radius: 20px;
  padding: 10px 0;
  width: ${(props) => props.width}%;
`;

const TextInstructionLevel = styled.p`
  font-size: 1.25rem;
  font-family: "Metropolis", sans-serif;
  color: #f1f1f1;
  margin-bottom: 10px;
`;

const IconStar = styled.img`
  width: 60px;
  height: 60px;
`;

export default {
  Container,
  RowLevels,
  TextLevel,
  Progress,
  ProgressBarLevel,
  TextInstructionLevel,
  IconStar,
};
