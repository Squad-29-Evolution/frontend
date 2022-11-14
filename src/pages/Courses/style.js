import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
`;

const ContentsCourse = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 51px;
`;

const TitleCourse = styled.h1`
  font-family: "Metropolis", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #e5e5e5;
  margin-bottom: 22px;
`;

export default { Container, ContentsCourse, TitleCourse };
