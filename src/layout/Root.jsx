import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import Header from "../pages/header/Header";
const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
