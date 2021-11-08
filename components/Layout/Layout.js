import React from "react";
import MainNavbar from "./MainNavbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mateus Trentz CV</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="md:flex min-h-screen bg-terciary lg:text-lg 2xl:text-xl text-gray-800 font-sans">
        <MainNavbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
