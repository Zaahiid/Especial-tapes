import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <Navbar />
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
