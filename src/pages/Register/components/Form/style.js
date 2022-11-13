import styled from "styled-components";
import { Link } from "react-router-dom";

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

const GenericContainer = styled.div`
  width: 100%;
  /* margin-bottom: 35px; */
  position: relative;
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

  &.error {
    bottom: -19px;
  }
`;

const CreateAccount = styled.p`
  font-family: "Metropolis", sans-serif;
  font-weight: 400;
  color: #e5e5e5;
`;

const Span = styled(Link)`
  background: linear-gradient(180deg, #ff8408 0%, #ff5d22 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: inherit;
  font-family: inherit;
`;

export default {
  Container,
  Form,
  GenericContainer,
  SpanError,
  CreateAccount,
  Span,
};
