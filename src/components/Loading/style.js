import styled, { keyframes } from "styled-components";
import Orange from "../../assets/orange_kawaii.svg";

const Loop = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 4;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #2e2e2e;
`;

const Loading = styled.div`
  background-image: url(${Orange});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100px;
  height: 100px;
  animation: ${Loop} 2s linear infinite;
`;

const Text = styled.p`
  font-family: "Metropolis", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #e5e5e5;
`;

export default { Loading, Text, Container };
