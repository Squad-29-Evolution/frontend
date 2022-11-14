import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px 10px;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;

const ContentsCourse = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 51px;

  @media (max-width: 1000px) {
    align-items: center;
    width: 100%;
  }
`;

const ViewContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  @media (min-width: 480px) and (max-width: 1000px) {
    display: grid;
    max-width: 100%;
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }
`;

const TitleSection = styled.h1`
  font-family: "Metropolis", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #e5e5e5;
  margin-bottom: 22px;
`;

const CoursesView = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;

const ContentCoursesView = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  @media (min-width: 480px) and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export default {
  Container,
  ContentsCourse,
  ViewContents,
  TitleSection,
  CoursesView,
  ContentCoursesView,
};
