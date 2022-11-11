import styled from "styled-components";

const Container = styled.main`
  background: linear-gradient(
    180deg,
    rgba(107, 90, 76, 0.93) 66.15%,
    rgba(46, 46, 46, 0) 100%
  );
  border-radius: 10px;
  max-width: 739px;
  width: 100%;
  height: 500px;
  z-index: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #e5e5e5;
  font-family: "Metropolis", sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  margin: 20px;
`;

export default { Container, Form, Title };
