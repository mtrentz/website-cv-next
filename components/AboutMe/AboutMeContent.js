import React, { useState } from "react";
import ContentNavbar from "../General/ContentNavbar";
import AboutMeContentRenderer from "./AboutMeContentRenderer";

const AboutMeContent = () => {
  const [navbarLinks, setNavbarLinks] = useState([
    {
      id: 1,
      name: "Education",
      selected: true,
    },
    {
      id: 2,
      name: "Tech Skills",
      selected: false,
    },
    {
      id: 3,
      name: "Complementary",
      selected: false,
    },
  ]);

  const getLinkId = (linkName) => {
    return navbarLinks.find((link) => link.name === linkName).id;
  };

  const getLinkSelected = (linkName) => {
    return navbarLinks.find((link) => link.name === linkName).selected;
  };

  const handleClick = (id) => {
    // When click on content navbar, change value on list
    const updatedLinks = navbarLinks.map((link) =>
      link.id === id
        ? { ...link, selected: true }
        : { ...link, selected: false }
    );
    setNavbarLinks(updatedLinks);
  };

  return (
    <div>
      <ContentNavbar navbarLinks={navbarLinks} handleClick={handleClick} />
      <span>AboutMeContent</span>
      <AboutMeContentRenderer getLinkSelected={getLinkSelected} />
    </div>
  );
};

export default AboutMeContent;
