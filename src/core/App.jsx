import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

import Home from "../pages/home/Home";
import Work from "../pages/work/Work";
import AppDetails from "../pages/work/app_details/AppDetails";
import Lab from "../pages/lab/Lab";
import SkillsTools from "../pages/skills/SkillsTools";
import Experience from "../pages/experience/Experience";
import Studio from "../pages/studio/Studio";

import { App as Config } from "../config/AppConfig";

const prefersDark = () =>
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);

function App() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(prefersDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isDarkMode ? "#14101E" : "#F4F1FA");
  }, [isDarkMode]);

  const toggleTheme = (dark) => {
    localStorage.theme = dark ? "dark" : "light";
    setDarkMode(dark);
  };

  useEffect(() => {
    const onKey = (event) => {
      // ignore shortcuts while typing
      if (event.target.closest?.("input, textarea, [contenteditable]")) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.keyCode === Config.Shortcuts.ESC) setNavOpen(false);
      else if (event.keyCode === Config.Shortcuts.DarkTheme) toggleTheme(!isDarkMode);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isDarkMode]);

  return (
    <div className="App relative w-screen overflow-x-clip">
      {/* drifting clay blobs behind everything */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <span className="blob left-[-120px] top-[-80px] h-[420px] w-[420px] bg-[#c4b5fd]" />
        <span className="blob right-[-140px] top-[260px] h-[380px] w-[380px] bg-[#f9a8d4]" style={{ animationDelay: "-6s" }} />
        <span className="blob left-[20%] top-[1100px] h-[360px] w-[360px] bg-[#fde68a]" style={{ animationDelay: "-11s" }} />
        <span className="blob right-[10%] top-[2000px] h-[400px] w-[400px] bg-[#a7f3d0]" style={{ animationDelay: "-3s" }} />
      </div>

      {isNavOpen && (
        <div
          className="fixed inset-0 z-30 bg-canvas/40 backdrop-blur-sm lg:hidden"
          onClick={() => setNavOpen(false)}
          aria-hidden="true"
        />
      )}

      <a
        href="#main"
        className="clay-btn clay-btn-primary absolute left-4 top-4 z-50 -translate-y-24 focus:translate-y-0"
      >
        Skip to content
      </a>

      <NavBar
        isOpen={isNavOpen}
        setIsOpen={setNavOpen}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <main id="main" className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:app" element={<AppDetails />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/skills-tools" element={<SkillsTools />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
