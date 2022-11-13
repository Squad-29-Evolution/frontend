import styled from "styled-components";

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #2e2e2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: "Metropolis", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #e5e5e5;
  margin-bottom: 19px;
`;

export default { Container, Title };
