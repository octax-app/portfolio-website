import { Link, useLocation } from "react-router-dom";

import {App as Config} from "../../../config/AppConfig";

const style = {   
    lineHeight:"1.1",
    fontSize:"16px",
}
function NavBarItems({ className, setIsOpen }) {
  const location = useLocation();

  const handleAfterClick = ()=>{
    window.scrollTo({ top: 0, left: 0 });
    setIsOpen(false);
  };
 
  return (
    <>
      {Config.NavLinks.map(function (link) {
        return (
          <Link to={link.Path} onClickCapture={handleAfterClick} key={link.Path}>
            <li
              style={style}
              className={`
              text-accent-700 dark:text-accent-200 
              hover:bg-accent-300 hover:dark:bg-accent-200/10
              rounded-xl px-2.5 py-1 list-none ${
                location.pathname === link.Path
                  ? "bg-accent-300 dark:bg-accent-200/10"
                  : ""
              } ${className}`}
            >
              {link.Title}
            </li>
          </Link>
        );
      })}
    </>
  );
}

export default NavBarItems;