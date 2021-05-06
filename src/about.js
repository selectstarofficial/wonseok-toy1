import React, { useEffect } from "react";
import Allclient from "./A_AllClients/allclients";
import Footer from "./A_Footer/footer";
import AboutHeader from "./AboutHeader/AboutHeader";
import Contactpage from "./Contact/react-contact";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    console.log("hi");
  };

  return (
    <div className="About">
      <AboutHeader />
      <Contactpage />
      <Allclient />
      <Footer handleClick={handleClick} />
    </div>
  );
};
export default About;
