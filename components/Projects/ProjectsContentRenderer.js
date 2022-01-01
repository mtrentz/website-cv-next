import Coding from "./Coding";
import Vizzes from "./Vizzes";
import Animations from "./Animations";

const ProjectsContentRenderer = ({ getLinkSelected }) => {
  if (getLinkSelected("Coding")) {
    return <Coding />;
  }
  if (getLinkSelected("Data Vizzes")) {
    return <Vizzes />;
  }
  if (getLinkSelected("Animations")) {
    return <Animations />;
  }
};

export default ProjectsContentRenderer;
