import React, { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import MainHeader from "../header/MainHeader";
import "./App.css";

const ScrollToTop = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
};

function App() {
  return (
    <Router>
      <ScrollToTop>
        <MainHeader />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}

export default App;
