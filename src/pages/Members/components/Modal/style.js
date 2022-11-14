import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  background: #1e1e1ef7;
  position: fixed;
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
`;

const BG = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #2e2e2ea3;
  z-index: 4;
  inset: 0;
`;

const Title = styled.div`
  font-weight: 700;
  color: #e5e5e5;
  font-size: 1.4rem;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperGeneric = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;

  & input {
    outline: none;
    border-radius: 10px;
    background: #2e2e2ea3;
    border: 2px solid #fff;
  }
`;

const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  margin: 10px 0;
`;

const Button = styled.button`
  border-radius: 10px;
  font-size: 1.1rem;
  color: #ffffff;
  padding: 10px;
  background: #ff5722;
  cursor: pointer;
  width: 100%;
  margin: 0 10px;
`;

const SpanError = styled.span`
  font-weight: 400;
  position: absolute;
  font-size: 0.8rem;
  color: red;
  bottom: 1px;
`;

export default {
  Container,
  BG,
  Title,
  WrapperGeneric,
  Button,
  Form,
  WrapperButton,
  SpanError,
};
