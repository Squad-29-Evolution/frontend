import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 400px;
  border-radius: 10px;
  background: linear-gradient(180deg, #ff8507 0%, #ff5a23 100%);
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
`;

export default { Container, BG, Title };
