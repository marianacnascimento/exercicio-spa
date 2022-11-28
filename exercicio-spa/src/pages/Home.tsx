import React from "react";
import { Banner } from "../components/Banner/Banner";
import { SectionContent } from "../components/SectionContent/SectionContent";
import { SectionIcons } from "../components/SectionIcons/SectionIcons";
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/image3.jpg";
import { Footer } from "../components/Footer/Footer";
export const Home = () => {
  return (
    <React.Fragment>
      <Banner titulo="Minha primeira página com React" />
      <SectionIcons />
      <SectionContent
        titulo="Lorem Ipsum"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        urlImage={img1}
      />
      <SectionContent
        titulo="Lorem Ipsum"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        urlImage={img2}
        reverse
      />
      <SectionContent
        titulo="Lorem Ipsum"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        urlImage={img3}
      />
      <Banner titulo="Contato" />
      <Footer />
    </React.Fragment>
  );
};