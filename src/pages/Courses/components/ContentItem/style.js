import styled from "styled-components";

const Container = styled.div`
  max-width: 880px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 29px;
`;

const TitleDescriptionContent = styled.h1`
  font-size: 1.25rem;
  color: #e5e5e5;
  font-weight: 600;
  font-family: "Metropolis", sans-serif;
  margin-bottom: 14px;
`;

const TextDescriptionContent = styled.p`
  font-family: "Metropolis", sans-serif;
  font-size: 1.15rem;
  color: #e5e5e5;
  line-height: 38.08px;
`;

export default {
  Container,
  DescriptionContent,
  TitleDescriptionContent,
  TextDescriptionContent,
};
