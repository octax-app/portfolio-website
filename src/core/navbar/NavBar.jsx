import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import Logo, { Wordmark } from "../logo/Logo";
import NavBarItems from "./nav_items/NavBarItems";
import Icon, { GithubGlyph } from "../../shared/Icon";

import { App as Config } from "../../config/AppConfig";

function IconButton({ children, label, ...props }) {
  const Tag = props.href ? "a" : "button";
  return (
    <Tag
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full text-ink/80 transition-all duration-300 ease-spring hover:-translate-y-0.5 hover:bg-sunken hover:text-ink"
      {...props}
    >
      {children}
    </Tag>
  );
}

function ThemeIcon({ isDarkMode }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={isDarkMode ? "sun" : "moon"}
        initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {isDarkMode ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" className="fill-current" aria-hidden="true">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          </svg>
        )}
      </motion.span>
    </AnimatePresence>
  );
}

// Floating clay navigation pill. On mobile the links drop into a clay sheet.
function NavBar({ isOpen, setIsOpen, isDarkMode, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LogoLink = Config.LogoForceRefresh ? "a" : Link;
  const logoProps = Config.LogoForceRefresh ? { href: "/" } : { to: "/" };

  return (
    <header className="sticky top-0 z-40 flex justify-center px-3 pt-3 sm:px-6">
      <nav
        aria-label="Main"
        className={`w-full max-w-[1120px] rounded-full px-2.5 py-2 transition-all duration-300 ${
          scrolled ? "clay bg-surface/85 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <LogoLink {...logoProps} className="group flex items-center gap-2 rounded-full pl-1.5 pr-3" aria-label="OctaX home">
            <Logo logo={Config.Logo} />
            <Wordmark className="text-[22px]" />
          </LogoLink>

          <ul className="hidden items-center gap-1 lg:flex">
            <NavBarItems />
          </ul>

          <div className="flex items-center gap-1">
            <IconButton
              label="Toggle theme (keyboard shortcut: D)"
              onClick={() => toggleTheme(!isDarkMode)}
              data-tooltip-id="theme-tooltip"
              data-tooltip-place="bottom"
              type="button"
            >
              <ThemeIcon isDarkMode={isDarkMode} />
            </IconButton>
            <Tooltip
              id="theme-tooltip"
              opacity={1}
              style={{ background: "#2A2338", color: "#fff", borderRadius: "12px", padding: "6px 10px", fontSize: "12px", zIndex: 50 }}
            >
              <span className="flex items-center gap-1.5">
                Toggle theme
                <kbd className="code rounded bg-white/20 px-1.5 font-bold">D</kbd>
              </span>
            </Tooltip>
            <IconButton label="Octax on GitHub" href={Config.Github} target="_blank" rel="noreferrer">
              <GithubGlyph size={24} />
            </IconButton>
            <a
              href={`https://wa.me/${Config.Contact.WhatsApp}`}
              target="_blank"
              rel="noreferrer"
              className="clay-btn clay-btn-primary ml-1 hidden !min-h-[42px] !px-5 text-sm sm:inline-flex"
            >
              Let's talk
            </a>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden hover:bg-sunken"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Icon name={isOpen ? "x" : "dashboard"} size={22} strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="clay absolute left-3 right-3 top-[76px] p-3 sm:left-6 sm:right-6 lg:hidden"
          >
            <ul className="grid grid-cols-2 gap-2">
              <NavBarItems className="justify-center !min-h-[48px]" onNavigate={() => setIsOpen(false)} />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default NavBar;
