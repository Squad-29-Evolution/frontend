import styled from "styled-components";

const Container = styled.div`
  background: #2e2e2e;
  height: 100vh;
  width: 100%;
`;

const Main = styled.main`
  width: 100%;
  height: calc(100% - 76px);
  display: flex;
`;

const ContentOutlet = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ContentBG = styled.div`
  background: linear-gradient(180deg, #ff8507 0%, #ff5a23 100%);
  border-bottom-left-radius: 5px;
  position: fixed;
  width: 100%;
  height: 60%;
  top: 0;
  z-index: -1;
`;

export default { Container, Main, ContentOutlet, ContentBG };
