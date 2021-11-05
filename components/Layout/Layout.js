import React from "react";
import MainNavbar from "./MainNavbar";

const Layout = ({ children }) => {
  return (
    <div className="md:flex min-h-screen">
      <MainNavbar />
      {children}
    </div>
  );
};

export default Layout;
