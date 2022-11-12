import { createGlobalStyle } from "styled-components";
import MetropolisRegular from "../../assets/fonts/Metropolis-Font-family/Metropolis-Regular.otf";
import MetropolisMedium from "../../assets/fonts/Metropolis-Font-family/Metropolis-Medium.otf";
import MetropolisBold from "../../assets/fonts/Metropolis-Font-family/Metropolis-Bold.otf";
import MetropolisExtraBold from "../../assets/fonts/Metropolis-Font-family/Metropolis-ExtraBold.otf";
import MetropolisBlack from "../../assets/fonts/Metropolis-Font-family/Metropolis-Black.otf";

const Fonts = createGlobalStyle`
    @font-face {
        font-family: "Metropolis";
        font-style: normal;
        font-weight: 400;
        src: url(${MetropolisRegular}) format("opentype");
    }
    @font-face {
        font-family: "Metropolis";
        font-style: normal;
        font-weight: 500;
        src: url(${MetropolisMedium}) format("opentype");
    }
    @font-face {
        font-family: "Metropolis";
        font-style: normal;
        font-weight: 700;
        src: url(${MetropolisBold}) format("opentype");
    }
    @font-face {
        font-family: "Metropolis";
        font-style: normal;
        font-weight: 800;
        src: url(${MetropolisExtraBold}) format("opentype");
    }

    @font-face {
        font-family: "Metropolis";
        font-style: normal;
        font-weight: 900;
        src: url(${MetropolisBlack}) format("opentype");
    }
`;

export default Fonts;
