import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";
import { Tooltip } from "react-tooltip";

import Logo from "../logo/Logo";
import NavBarItems from "./nav_items/NavBarItems";

import { App as Config } from "../../config/AppConfig";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const Path = (props) => (
  <path strokeWidth="4" strokeLinecap="round" {...props} />
);

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      ["path.top", { d: isOpen ? "M3 2L28 25" : "M3 27L29 27" }, { at: "<" }],
      ["path.mid", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      ["path.btm", { d: isOpen ? "M3 25L28 2" : "M3 4L29 4" }, { at: "<" }],
    ]);
  }, [animate, isOpen]);

  return scope;
}

function NavBar({ isOpen, setIsOpen, isDarkMode, toggleTheme }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scope = useMenuAnimation(isOpen);

 

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex h-16 justify-center items-center mb-5 px-5 2xl:px-0 z-20 ${
        scrollPosition > 0 &&
        "sticky top-0 backdrop-blur-sm bg-white/80 dark:bg-black/20 shadow-sm"
      }`}
    >
      <nav
        className="flex justify-between items-center  w-full w-1440"
        ref={scope}
      >
        <div className="flex items-center">
          <div>
            <motion.a
              whileTap={{ scale: 0.9 }}
              className="block md:hidden mr-3 ml-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 32 32"
                className="stroke-current text-accent-600 dark:text-accent-200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path d="M3 27L29 27" className="top" />
                <Path d="M3 16L29 16" className="mid" opacity="1" />
                <Path d="M3 4L29 4" className="btm" />
              </svg>
            </motion.a>
          </div>

          {Config.LogoForceRefresh ? (
            <a href="/">
              <Logo logo={Config.Logo} />
            </a>
          ) : (
            <Link to="/">
              <Logo logo={Config.Logo} />
            </Link>
          )}

          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="hidden md:flex gap-5 ml-3 "
          >
            <NavBarItems setIsOpen={()=>{}} />
          </motion.ul>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="flex gap-5 ml-3"
        >
          <div
            onClick={() => toggleTheme(!isDarkMode)}
            role="button"
            tabIndex={0}
            aria-label="Toggle theme (keyboard shortcut: D)"
            data-tooltip-id="theme-tooltip"
            data-tooltip-place="bottom"
            className="cursor-pointer rounded-xl px-2.5 py-1 flex items-center  hover:bg-accent-600/10 hover:dark:bg-accent-200/10"
          >
            <DarkModeSvg isDarkMode={isDarkMode} />
          </div>
          <Tooltip
            id="theme-tooltip"
            opacity={1}
            style={{
              background: "#334155",
              color: "#fff",
              borderRadius: "8px",
              padding: "6px 10px",
              fontSize: "12px",
              zIndex: 50,
            }}
          >
            <span className="flex items-center gap-1.5">
              Toggle theme
              <kbd
                style={{
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "4px",
                  padding: "1px 6px",
                  fontWeight: 700,
                  fontFamily: "'Fira Code', monospace",
                }}
              >
                D
              </kbd>
            </span>
          </Tooltip>
          <a
            className="rounded-xl px-2.5 py-1 flex items-center  hover:bg-accent-600/10 hover:dark:bg-accent-200/10"
            href={Config.Twitter}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              className="fill-current text-accent-600 dark:text-accent-200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.06502 3L13.362 17.3461L3 29.01H5.33207L14.404 18.798L21.7339 29.01H29.67L18.7937 13.857L28.4385 3H26.1065L17.7517 12.405L11.0012 3H3.06502ZM6.49451 4.78992H10.1404L26.24 27.2198H22.5941L6.49451 4.78992Z" />
            </svg>
          </a>
          <a
            className="rounded-xl px-2.5 py-1 hover:bg-accent-600/10 hover:dark:bg-accent-200/10"
            href={Config.Github}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              className="fill-current text-accent-600 dark:text-accent-200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2.99561C12.834 2.99574 9.77128 4.12242 7.35995 6.17407C4.94862 8.22571 3.346 11.0684 2.83884 14.1936C2.33168 17.3187 2.95309 20.5224 4.59186 23.2313C6.23064 25.9402 8.77984 27.9776 11.7834 28.9789C12.45 29.0956 12.7 28.6956 12.7 28.3456C12.7 28.0289 12.6833 26.9789 12.6833 25.8623C9.33333 26.4789 8.46666 25.0456 8.2 24.2956C7.9041 23.5662 7.43503 22.9198 6.83333 22.4123C6.36666 22.1623 5.7 21.5456 6.81665 21.529C7.24303 21.5752 7.65198 21.7236 8.00884 21.9615C8.3657 22.1994 8.65995 22.5198 8.86666 22.8956C9.04902 23.2232 9.29424 23.5116 9.58825 23.7443C9.88226 23.9769 10.2193 24.1493 10.58 24.2515C10.9408 24.3537 11.3181 24.3837 11.6905 24.3397C12.0629 24.2958 12.4229 24.1789 12.75 23.9956C12.8077 23.3178 13.1098 22.684 13.6 22.2123C10.6333 21.879 7.53333 20.7289 7.53333 15.629C7.51459 14.3038 8.00358 13.0217 8.9 12.0456C8.49237 10.8939 8.54007 9.63002 9.03333 8.51231C9.03333 8.51231 10.15 8.1623 12.7 9.87898C14.8817 9.27894 17.1849 9.27894 19.3667 9.87898C21.9166 8.14565 23.0333 8.51231 23.0333 8.51231C23.5267 9.63001 23.5744 10.8939 23.1667 12.0456C24.0658 13.0201 24.5552 14.3033 24.5333 15.629C24.5333 20.7456 21.4166 21.879 18.45 22.2123C18.7682 22.5348 19.0133 22.922 19.1686 23.3477C19.3239 23.7733 19.3857 24.2273 19.35 24.679C19.35 26.4623 19.3333 27.8956 19.3333 28.3456C19.3333 28.6957 19.5833 29.1123 20.25 28.979C23.2482 27.9695 25.7901 25.9273 27.4219 23.217C29.0537 20.5067 29.6692 17.3047 29.1585 14.1826C28.6478 11.0605 27.0442 8.22143 24.634 6.17229C22.2237 4.12314 19.1636 2.99725 16 2.99561Z" />
            </svg>
          </a>
        </motion.ul>
      </nav>
    </div>
  );
}

export default NavBar;

const menuVariants = {
  open: {
    opacity: 1,
    transform: "translate(0%, 0%)",
    filter: "blur(0px)",
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    opacity: 0,
    transform: "translate(0%, -30%)",
    filter: "blur(2px)",
    transition: {
      duration: 0.2,
    },
  },
};

function DarkModeSvg({ isDarkMode }) {
  const Path2 = (props) => (
    <path strokeWidth="1.5" strokeLinecap="round" {...props} />
  );

  return (
    <>  
      {!isDarkMode && (
        <motion.svg
          className="fill-current text-accent-600 dark"
          variants={menuVariants}
          initial="closed"
          animate="open"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ><path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            ></path>
         
        </motion.svg>
      )}
      {isDarkMode && (
        <motion.svg
          className="stroke-current text-accent-200 light"
          variants={menuVariants}
          initial="closed"
          animate="open"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9120000000000001"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <circle
              cx="12"
              cy="12"
              r="5"
              strokeWidth="1.5"
            ></circle>
            <Path2 d="M12 2V4" />
            <Path2 d="M12 20V22" />
            <Path2 d="M4 12L2 12" />
            <Path2 d="M22 12L20 12" />
            <Path2 opacity="0.5" d="M19.7778 4.22266L17.5558 6.25424" />
            <Path2 opacity="0.5" d="M4.22217 4.22266L6.44418 6.25424" />
            <Path2 opacity="0.5" d="M6.44434 17.5557L4.22211 19.7779" />
            <Path2 opacity="0.5" d="M19.7778 19.7773L17.5558 17.5551" />
          </g>
        </motion.svg>
      )}
    </>
  );
}
