import React, { useState } from "react";
import ContentNavbar from "../General/ContentNavbar";
import ProjectsContentRenderer from "./ProjectsContentRenderer";
import ContentTitle from "../General/ContentTitle";

const ProjectsContent = () => {
  const [navbarLinks, setNavbarLinks] = useState([
    {
      id: 1,
      name: "Coding",
      selected: true,
    },
    {
      id: 2,
      name: "Data Vizzes",
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
      <ContentTitle title="Projects" />
      <ContentNavbar navbarLinks={navbarLinks} handleClick={handleClick} />
      <ProjectsContentRenderer getLinkSelected={getLinkSelected} />
    </div>
  );
};

export default ProjectsContent;
