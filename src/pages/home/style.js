import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  background-color: #2e2e2e;
  padding: 15px 0;
`;

const ContentSection = styled.section`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const CoursesSection = styled.section`
  max-width: 512px;
  width: 100%;
  margin: 47px 0;
`;

const HeaderCoursesSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TitleHeader = styled.h1`
  font-family: "Metropolis", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #e5e5e5;
`;

const LinkHeaderCoursesSection = styled(Link)`
  color: #e5e5e5;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ImgArrow = styled.img`
  margin-left: 5px;
`;

const ViewCourses = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

const TrailsSection = styled.section`
  max-width: 512px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ViewTrails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const CalendarSection = styled.section`
  /* background-color: green; */
`;

export default {
  Container,
  ContentSection,
  CoursesSection,
  HeaderCoursesSection,
  TitleHeader,
  LinkHeaderCoursesSection,
  ImgArrow,
  ViewCourses,
  TrailsSection,
  ViewTrails,
  CalendarSection,
};
