import React, { useContext, useState } from "react";

const AboutMeContext = React.createContext();
const AboutMeUpdateContext = React.createContext();

export function useAboutMe() {
  return useContext(AboutMeContext);
}

export function useAboutMeUpdate() {
  return useContext(AboutMeUpdateContext);
}

export function AboutMeProvider({ children }) {
  const [aboutMeLinks, setAboutMeLink] = useState([
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

  const handleAboutMeClick = (linkName) => {
    // When click on content navbar, change value on list
    const updatedLinks = aboutMeLinks.map((link) =>
      link.name === linkName
        ? { ...link, selected: true }
        : { ...link, selected: false }
    );
    setAboutMeLink(updatedLinks);
  };

  return (
    <AboutMeContext.Provider value={aboutMeLinks}>
      <AboutMeUpdateContext.Provider value={handleAboutMeClick}>
        {children}
      </AboutMeUpdateContext.Provider>
    </AboutMeContext.Provider>
  );
}
