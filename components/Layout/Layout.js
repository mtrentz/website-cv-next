import React from "react";
import MainNavbar from "./MainNavbar";

const Layout = ({ children }) => {
  return (
    <div className="md:flex min-h-screen bg-terciary lg:text-lg 2xl:text-xl text-gray-800">
      <MainNavbar />
      {children}
    </div>
  );
};

export default Layout;
