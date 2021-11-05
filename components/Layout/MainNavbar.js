import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const MainNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className="bg-red-300 flex justify-between md:hidden">
        <span>Trentz CV</span>
        <button onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      {/* TODO: Conferir se preciso colocar que o click em qlqr botão QUANDO MOBILE, destoggla o sidebar */}
      <nav
        className={`flex flex-col bg-blue-300 w-44 absolute inset-y-0 left-0 transform ${
          showSidebar ? "-translate-x-full" : null
        } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        {/* Button Close */}
        <div>
          <button>
            <AiOutlineClose />
          </button>
        </div>

        {/* Logo */}
        <div>
          <Link href="/">
            <a>
              <p>Home</p>
              {/* <svg
              className="w-24 h-24 md:w-26 md:h-26 lg:w-30 lg:h-30 xl:h-32 xl:w-32 2xl:h-40 2xl:w-40  rounded-lg md:rounded-xl lg: opacity-90"
              viewBox="0 0 143 143"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path fill="#67839C" fill-opacity=".9" d="M0 0h143v143H0z" />
              <path
              d="M38.908 38.55H22.522l16.386 81.791v-81.79ZM71.679 38.55v65.542L104.45 38.55H71.952v-.273h-.273V22.165h49.156V38.55l-32.77 65.542h32.77v16.385H55.43V38.55h16.249Z"
              fill="#fff"
              stroke="#fff"
              stroke-width="2"
              />
            </svg> */}
            </a>
          </Link>
        </div>

        {/* Nav */}
        <div>
          <Link href="/aboutme">
            <a>About Me</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>

        {/* Socials */}
        <div>
          <a href="#"> Linkedin </a>
          <a href="#"> Github </a>
          <a href="#"> Tableau </a>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
