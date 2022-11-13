import styled from "styled-components";

const Container = styled.main`
  max-width: 533px;
  width: 100%;
  height: 493px;
  background-color: rgba(30, 30, 30, 0.5);
  border-radius: 15px;
  padding: 24px 46px;

  @media (max-width: 800px) {
    max-width: 350px;
  }
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SpanError = styled.span`
  font-family: "Metropolis", sans-serif;
  font-weight: 400;
  position: absolute;
  font-size: 0.8rem;
  color: red;
  bottom: 1px;
`;

export default { Container, Form, SpanError };
