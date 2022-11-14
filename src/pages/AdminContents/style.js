import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const Container = styled.div`
  width: 100%;
  z-index: 3;
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  & label {
    max-width: 500px;
  }
`;

const NewButton = styled.button`
  font-weight: 700;
  color: #e5e5e5;
  margin: 5px;
  background: transparent;
  cursor: pointer;
  font-size: 1.1rem;
`;

const WrapperGeneric = styled.div`
  max-width: 960px;
  width: 100%;

  margin: 0 auto;
`;

const ToastContainerCss = styled(ToastContainer)`
  z-index: 999;
`;

export default {
  Container,
  NewButton,
  WrapperGeneric,
  ToastContainerCss,
  Header,
};
