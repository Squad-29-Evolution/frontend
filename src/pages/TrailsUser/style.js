import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 15px 0;
`;

const TrailsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-color: red; */

  @media (max-width: 800px) {
    align-items: center;
  }
`;

const TitleTrailsSection = styled.h1`
  font-size: 2rem;
  margin-bottom: 22px;
  color: #e5e5e5;
  font-family: "Metropolis", sans-serif;
  font-weight: 700;
`;

export default { Container, TrailsSection, TitleTrailsSection };
