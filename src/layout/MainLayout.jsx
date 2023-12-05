import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../sections/header/Header";
import Navbar from "../sections/navbar/Navbar";
import Footer from "../sections/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
