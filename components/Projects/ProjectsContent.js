import React, { useState } from "react";
import ContentNavbar from "../General/ContentNavbar";
import ProjectsContentRenderer from "./ProjectsContentRenderer";
import ContentTitle from "../General/ContentTitle";
import { useProjects, useProjectsUpdate } from "./ProjectsContext";

const ProjectsContent = () => {
  const navbarLinks = useProjects();
  const handleClick = useProjectsUpdate();

  const getLinkSelected = (linkName) => {
    return navbarLinks.find((link) => link.name === linkName).selected;
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
