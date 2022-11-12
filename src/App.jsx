import Routers from "./routers";
import GlobalStyles from "./styles/GlobalStyles";
import Fonts from "./styles/Fonts";
import { AuthContextProvide } from "./context/authContext";

function App() {
  return (
    <>
      <AuthContextProvide>
        <GlobalStyles />
        <Fonts />
        <Routers />
      </AuthContextProvide>
    </>
  );
}

export default App;
