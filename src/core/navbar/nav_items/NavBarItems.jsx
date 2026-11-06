import { Link, useLocation } from "react-router-dom";

import { App as Config } from "../../../config/AppConfig";

function NavBarItems({ className = "", onNavigate = () => {} }) {
  const location = useLocation();

  return (
    <>
      {Config.NavLinks.map((link) => {
        const active =
          link.Path === "/" ? location.pathname === "/" : location.pathname.startsWith(link.Path);
        return (
          <li key={link.Path} className="list-none">
            <Link
              to={link.Path}
              aria-current={active ? "page" : undefined}
              onClickCapture={() => {
                window.scrollTo({ top: 0, left: 0 });
                onNavigate();
              }}
              className={`flex min-h-[40px] items-center rounded-full px-4 font-display text-[15px] font-extrabold transition-all duration-300 ease-spring ${
                active
                  ? "clay-btn-primary text-white"
                  : "text-ink/80 hover:bg-sunken hover:text-ink"
              } ${className}`}
            >
              {link.Title}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default NavBarItems;
