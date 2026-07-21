import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { createPortal } from "react-dom";


import MobileNavBar from "./navbar/MobileNavBar";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

import Home from "../pages/home/Home";
import Work from "../pages/work/Work";
import AppDetails from "../pages/work/app_details/AppDetails";
import SkillsTools from "../pages/skills/SkillsTools";
import Experience from "../pages/experience/Experience";
import Studio from "../pages/studio/Studio";

import {App as Config} from '../config/AppConfig';

function App() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    checkTheme();
    document.addEventListener("keydown", _handleQKey);
    return () => {
      document.removeEventListener("keydown", _handleQKey);
    };
  });

  const _handleQKey = (event) => {
     if (event.keyCode === Config.Shortcuts.ESC) {
      if(isNavOpen) setNavOpen(false);
    } else if (event.keyCode === Config.Shortcuts.DarkTheme) {
      toggleTheme(!isDarkMode);
    }
  }

  const checkTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  };

  const toggleTheme = (dark) => {
    if (dark) {
      localStorage.theme = "dark";
    } else  {
      localStorage.theme = "light";
    }
    checkTheme();
  };


  return (
    <div className="App w-screen">
      {isNavOpen &&
        createPortal(
          <div
            className={`fixed w-full h-full z-10 mt-16 backdrop-blur-sm bg-white/20 dark:bg-black/20 `}
            onClick={() => {
              isNavOpen && setNavOpen(false);
            }}
          ></div>,
          document.body
        )}
      <MobileNavBar isOpen={isNavOpen} setIsOpen={setNavOpen} />
      <NavBar
        isOpen={isNavOpen}
        setIsOpen={setNavOpen}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <div className="flex justify-center  ">
        <div className="w-1440 w-full">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/work/:app" element={<AppDetails />} />
            <Route exact path="/skills-tools" element={<SkillsTools />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/studio" element={<Studio />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
