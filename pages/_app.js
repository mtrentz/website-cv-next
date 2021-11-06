import "tailwindcss/tailwind.css";
import Layout from "../components/Layout/Layout";
import { AboutMeProvider } from "../components/AboutMe/AboutMeContext";
import { ProjectsProvider } from "../components/Projects/ProjectsContext";

function MyApp({ Component, pageProps }) {
  return (
    <ProjectsProvider>
      <AboutMeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AboutMeProvider>
    </ProjectsProvider>
  );
}

export default MyApp;
