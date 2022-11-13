import styled from "styled-components";

const Container = styled.div`
  background: #2e2e2e;
  height: 100vh;
  width: 100%;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
`;

const ContentOutlet = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export default { Container, ContentOutlet, Main };
