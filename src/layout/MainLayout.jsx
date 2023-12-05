import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../sections/header/Header";
import Navbar from "../sections/navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Navbar />
    </>
  );
};

export default MainLayout;
