import { Link } from "react-router-dom";

import AboutMe from "./AboutMe";
import FooterEnd from "./FooterEnd";

import { App as Config } from "../../config/AppConfig";

const dividerStyle = {
  borderBottom: "2px solid transparent",
  borderImage:
    "linear-gradient(0.25turn, #00000000, var(--secondary), #00000000)",
  borderImageSlice: 1,
};

function Footer() {
  const handleAfterClick = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  const communityLinks = Config.Links.filter((link) => link.Title !== "");

  return (
    <footer className="mt-24">
      {/* Top divider */}
      <div style={dividerStyle}></div>

      <div className="flex justify-center px-7 md:px-5 lg:px-0">
        <div className="max-w-[944px] w-full plus-font pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <AboutMe
              className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left"
              aboutMe={Config.AboutMe}
              twitter={Config.Twitter}
              github={Config.Github}
            />

            {/* Community projects */}
            <div className="text-center md:text-left">
              <p className="font-semibold text-lg text-accent-600 dark:text-accent-300">
                {Config.LinksTitle}
              </p>
              <div className="flex flex-col gap-3 mt-5 text-accent-500 dark:text-accent-400">
                {communityLinks.map((link) => (
                  <a
                    className="hover:text-blue-500 dark:hover:text-primary transition-colors w-fit mx-auto md:mx-0"
                    target="_blank"
                    rel="noreferrer"
                    href={link.Path}
                    key={link.Path}
                  >
                    {link.Title}
                  </a>
                ))}
              </div>
            </div>

            {/* Site nav */}
            <div className="text-center md:text-left">
              <p className="font-semibold text-lg text-accent-600 dark:text-accent-300">
                This Site
              </p>
              <div className="flex flex-col gap-3 mt-5 text-accent-500 dark:text-accent-400">
                {Config.NavLinks.map((link) => (
                  <Link
                    className="hover:text-blue-500 dark:hover:text-primary transition-colors w-fit mx-auto md:mx-0"
                    to={link.Path}
                    key={link.Path}
                    onClickCapture={handleAfterClick}
                  >
                    {link.Title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <FooterEnd
            copyRights={Config.CopyRights}
            website={Config.Website}
            footerNote={Config.FooterNote}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
