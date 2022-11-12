import { Link } from "react-router-dom";
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
  z-index: 4;

  @media (max-width: 800px) {
    max-width: 500px;
    margin: 0 15px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #e5e5e5;
  font-family: "Metropolis", sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  margin: 20px;
`;

const InputContainer = styled.div`
  max-width: 441px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const GenericContainer = styled.div`
  width: 100%;
  margin-bottom: 35px;
  position: relative;
`;

const RecoveryPassword = styled(Link)`
  background: linear-gradient(180deg, #ff8508 0%, #ff5b23 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 500;
  font-family: "Metropolis", sans-serif;
  position: relative;
  top: 16px;
  font-size: 1.1rem;
`;

const CreateAccount = styled.p`
  font-family: "Metropolis", sans-serif;
  font-weight: 400;
  color: rgba(229, 229, 229, 0.8);
  margin: 5px;
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

const SpanError = styled.span`
  font-family: "Metropolis", sans-serif;
  font-weight: 400;
  position: absolute;
  font-size: 0.8rem;
  color: red;
  bottom: 1px;

  &.email {
    bottom: -17px;
  }
`;

export default {
  Container,
  Form,
  Title,
  InputContainer,
  GenericContainer,
  RecoveryPassword,
  CreateAccount,
  Span,
  SpanError,
};
