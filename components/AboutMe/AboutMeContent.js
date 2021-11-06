import React, { useState } from "react";
import ContentNavbar from "../General/ContentNavbar";
import AboutMeContentRenderer from "./AboutMeContentRenderer";
import ContentTitle from "../General/ContentTitle";
import { useAboutMe, useAboutMeUpdate } from "./AboutMeContext";

const AboutMeContent = () => {
  const navbarLinks = useAboutMe();
  const handleClick = useAboutMeUpdate();

  const getLinkSelected = (linkName) => {
    return navbarLinks.find((link) => link.name === linkName).selected;
  };

  return (
    <div>
      <ContentTitle title="About Me" />
      <ContentNavbar navbarLinks={navbarLinks} handleClick={handleClick} />
      <AboutMeContentRenderer getLinkSelected={getLinkSelected} />
    </div>
  );
};

export default AboutMeContent;
