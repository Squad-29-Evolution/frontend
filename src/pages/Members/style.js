import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: transparent;
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
  max-width: 739px;
  width: 100%;
  margin: 0 auto;
`;

export default {
  Container,
  NewButton,
  WrapperGeneric,
};
