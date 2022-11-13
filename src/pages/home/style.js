import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1.5fr;
`;

const ContentSection = styled.section`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const CalendarSection = styled.section`
  /* background-color: green; */
`;

export default { Container, ContentSection, CalendarSection };
