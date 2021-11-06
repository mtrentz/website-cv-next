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

const MainNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className="bg-white shadow-md h-10 flex justify-between md:hidden items-center px-4 py-2">
        {/* Small Logo */}
        <div className="flex items-center justify-center h-[15%]">
          <div className="w-7 h-7 rounded-lg overflow-hidden">
            <Link href="/">
              <a>
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

      {/* Sidebar */}
      <nav
        className={`flex flex-col bg-white w-48 absolute inset-y-0 left-0 transform ${
          showSidebar ? "-translate-x-full" : null
        } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
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
                <a onClick={toggleSidebar}>
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
              toggleSidebar={toggleSidebar}
            />
            {/* TODO: Agora que eu nao tenho mais pagina pra esses sub-links, preciso ver como
            vou fazer dar render no componente certo. Uma opcao é passar os states pro topo e dps ir descendo.
            Uma outra pode ser usar redux... */}
            <MenuSubSection
              sectionTitle="Education"
              sectionIcon={<HiOutlineAcademicCap />}
              sectionHref="#"
              toggleSidebar={toggleSidebar}
            />
            <MenuSubSection
              sectionTitle="Tech Skills"
              sectionIcon={<HiOutlineTerminal />}
              sectionHref="#"
              toggleSidebar={toggleSidebar}
            />
            <MenuSubSection
              sectionTitle="Complementary"
              sectionIcon={<HiOutlinePuzzle />}
              sectionHref="#"
              toggleSidebar={toggleSidebar}
            />
            <MenuMainSection
              sectionTitle="Projects"
              sectionIcon={<HiOutlineSparkles />}
              sectionHref="/projects"
              toggleSidebar={toggleSidebar}
            />
            <MenuSubSection
              sectionTitle="Coding"
              sectionIcon={<HiOutlineCode />}
              sectionHref="#"
              toggleSidebar={toggleSidebar}
            />
            <MenuSubSection
              sectionTitle="Data Vizzes"
              sectionIcon={<HiOutlineChartBar />}
              sectionHref="#"
              toggleSidebar={toggleSidebar}
            />
          </div>
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
