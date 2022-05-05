import React from "react";
import { Route, Routes } from "react-router-dom";

import SocialIcons from "../components/socialicons/SocialIcons";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Portfolio from "../pages/portfolio/Portfolio";

const AppRoutes = () => {
  return (
    <div className="s_c">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <SocialIcons />
    </div>
  );
};

export default AppRoutes;
