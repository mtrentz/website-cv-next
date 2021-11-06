import Coding from "./Coding";
import Vizzes from "./Vizzes";

const ProjectsContentRenderer = ({ getLinkSelected }) => {
  if (getLinkSelected("Coding")) {
    return <Coding />;
  }
  if (getLinkSelected("Data Vizzes")) {
    return <Vizzes />;
  }
};

export default ProjectsContentRenderer;
