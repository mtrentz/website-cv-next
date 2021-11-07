import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseSquare, AiOutlineUser } from "react-icons/ai";
import {
  HiOutlineAcademicCap,
  HiOutlineTerminal,
  HiOutlinePuzzle,
  HiOutlineSparkles,
  HiOutlineCode,
  HiOutlineChartBar,
} from "react-icons/hi";
import { IoLogoTableau, IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { useState } from "react";
import LogoWebsite from "../General/LogoWebsite";
import MenuMainSection from "./MenuMainSection";
import MenuSubSection from "./MenuSubSection";
import { useAboutMeUpdate } from "../AboutMe/AboutMeContext";
import { useProjectsUpdate } from "../Projects/ProjectsContext";

const MainNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleAboutMeClick = useAboutMeUpdate();

  // Handle click redirect and closes sidebar
  const onClickAboutMe = (linkName) => {
    toggleSidebar();
    handleAboutMeClick(linkName);
  };

  const handleProjectsClick = useProjectsUpdate();

  // Handle click redirect and closes sidebar
  const onClickProjects = (linkName) => {
    toggleSidebar();
    handleProjectsClick(linkName);
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className="bg-white shadow-md h-10 flex justify-between md:hidden items-center px-4 py-2">
        {/* Small Logo */}
        <div className="flex items-center justify-center h-[15%]">
          <div className="w-7 h-7 rounded-lg overflow-hidden">
            <Link href="/">
              <a onClick={() => handleAboutMeClick("Education")}>
                <LogoWebsite />
              </a>
            </Link>
          </div>
        </div>
        <span>Mateus Kochhann Trentz</span>
        <button onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>

      {/* TODO: Quando a navbar ta aberta em mobile da pra scrollar pra baixo... E a sidebar nao scrolla
        Ver como ou fazer ela scrollar ou prender o scroll... */}
      {/* Sidebar */}
      <nav
        className={`h-screen flex flex-col bg-white w-48 absolute inset-y-0 left-0 transform ${
          showSidebar ? "-translate-x-full" : null
        } md:relative md:translate-x-0 transition duration-200 ease-in-out z-50 md:pt-4`}
      >
        <div className="h-full">
          {/* Button Close for Mobile */}
          <div className="md:hidden flex justify-end w-full pr-1 pt-1">
            <button onClick={toggleSidebar}>
              <AiOutlineCloseSquare className="h-6 w-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center h-[15%]">
            <div className="w-24 h-24 rounded-lg overflow-hidden">
              <Link href="/">
                <a onClick={() => onClickAboutMe("Education")}>
                  <LogoWebsite />
                </a>
              </Link>
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col mt-4">
            {/* Toggling the sidebar on non-md screen does nothing. So it works alright */}
            <MenuMainSection
              sectionTitle="About Me"
              sectionIcon={<AiOutlineUser />}
              sectionHref="/aboutme"
              onClickFunc={onClickAboutMe}
              // This has to be EXACTLY the same as the one in the AboutMeContext
              onClickValue="Education"
            />
            <MenuSubSection
              sectionTitle="Education"
              sectionIcon={<HiOutlineAcademicCap />}
              sectionHref="/aboutme"
              toggleSidebar={toggleSidebar}
              onClickFunc={onClickAboutMe}
              // This has to be EXACTLY the same as the one in the AboutMeContext
              onClickValue="Education"
            />
            <MenuSubSection
              sectionTitle="Tech Skills"
              sectionIcon={<HiOutlineTerminal />}
              sectionHref="/aboutme"
              onClickFunc={onClickAboutMe}
              // This has to be EXACTLY the same as the one in the AboutMeContext
              onClickValue="Tech Skills"
            />
            <MenuSubSection
              sectionTitle="Complementary"
              sectionIcon={<HiOutlinePuzzle />}
              sectionHref="/aboutme"
              onClickFunc={onClickAboutMe}
              // This has to be EXACTLY the same as the one in the AboutMeContext
              onClickValue="Complementary"
            />
            <MenuMainSection
              sectionTitle="Projects"
              sectionIcon={<HiOutlineSparkles />}
              sectionHref="/projects"
              onClickFunc={onClickProjects}
              // This has to be EXACTLY the same as the one in the AboutMeContext
              onClickValue="Coding"
            />
            <MenuSubSection
              sectionTitle="Coding"
              sectionIcon={<HiOutlineCode />}
              sectionHref="/projects"
              onClickFunc={onClickProjects}
              // This has to be EXACTLY the same as the one in the AboutMeContext
              onClickValue="Coding"
            />
            <MenuSubSection
              sectionTitle="Data Vizzes"
              sectionIcon={<HiOutlineChartBar />}
              sectionHref="/projects"
              onClickFunc={onClickProjects}
              // This has to be EXACTLY the same as the one in the AboutMeContext
              onClickValue="Data Vizzes"
            />
          </div>
          {/* TODO: Download CV Button */}
        </div>

        {/* socials */}
        <div className="h-24 flex-grow-0 mb-3">
          <p className="mb-2 ml-4 font-medium">Find me on</p>
          <div className="flex flex-row justify-center gap-3 items-center">
            <a
              href="https://github.com/mtrentz"
              target="_blank"
              title="Link to my GitHub"
            >
              <FaGithubSquare className="w-10 h-10 text-gray-700" />
            </a>
            <a
              href="https://public.tableau.com/app/profile/mtrentz"
              target="_blank"
              title="Link to my Tableau Public"
            >
              <IoLogoTableau className="w-9 h-9 bg-gray-700 text-white rounded-[4px] p-[2px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/mtrentz/"
              target="_blank"
              title="Link to my LinkedIn"
            >
              <IoLogoLinkedin className="w-10 h-10 text-gray-700" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
