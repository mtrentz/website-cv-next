import React from "react";
import MainNavbar from "./MainNavbar";

const Layout = ({ children }) => {
  return (
    <div className="md:flex min-h-screen bg-terciary">
      <MainNavbar />
      {children}
    </div>
  );
};

export default Layout;
