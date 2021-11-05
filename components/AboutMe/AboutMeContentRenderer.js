import React from "react";
import Education from "./Education";
import Tech from "./Tech";
import Complementary from "./Complementary";

const AboutMeContentRenderer = ({ getLinkSelected }) => {
  if (getLinkSelected("Education")) {
    return <Education />;
  }
  if (getLinkSelected("Tech Skills")) {
    return <Tech />;
  }
  if (getLinkSelected("Complementary")) {
    return <Complementary />;
  }
};

export default AboutMeContentRenderer;
