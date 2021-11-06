import React, { useContext, useState } from "react";

const ProjectsContext = React.createContext();
const ProjectsUpdateContext = React.createContext();

export function useProjects() {
  return useContext(ProjectsContext);
}

export function useProjectsUpdate() {
  return useContext(ProjectsUpdateContext);
}

export function ProjectsProvider({ children }) {
  const [projectsLinks, setProjectsLink] = useState([
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

  const handleProjectsClick = (linkName) => {
    // When click on content navbar, change value on list
    const updatedLinks = projectsLinks.map((link) =>
      link.name === linkName
        ? { ...link, selected: true }
        : { ...link, selected: false }
    );
    setProjectsLink(updatedLinks);
  };

  return (
    <ProjectsContext.Provider value={projectsLinks}>
      <ProjectsUpdateContext.Provider value={handleProjectsClick}>
        {children}
      </ProjectsUpdateContext.Provider>
    </ProjectsContext.Provider>
  );
}
