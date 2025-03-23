import { Link } from "react-router-dom";

import AboutMe from "./AboutMe";
import FooterEnd from "./FooterEnd";

import { App as Config } from "../../config/AppConfig";

const style = {
  borderBottom: "2px solid transparent",
  borderImage:
    "linear-gradient(0.25turn, #00000000, var(--secondary), #00000000)",
  borderImageSlice: 1,
};



function Footer() {

  const handleAfterClick = () => {
    window.scrollTo({ top: 0, left: 0});
  };

    return (
      <>
        <div className="mt-10" style={style}></div>

        <div className="flex justify-center  px-5 2xl:px-0 ">
          <div className="mx-5 mt-10 w-[1440px] plus-font">
            <div className="grid grid-cols-8 gap-10">
              <AboutMe
                className="col-span-8 sm:col-span-6 sm:col-start-2 md:col-span-3 lg:col-span-2 flex flex-col items-center md:items-start"
                aboutMe={Config.AboutMe}
                twitter={Config.Twitter}
                github={Config.Github}
              />
              <div className="col-span-8 sm:col-span-6 sm:col-start-2 md:col-span-4 md:col-start-5 lg:col-span-3  lg:col-start-6 flex md:items-start justify-between text-accent-500 dark:text-accent-300 gap-20 mt-10 md:mt-0">
                <div>
                  <p className="font-semibold text-lg text-center md:text-start">
                    {Config.LinksTitle}
                  </p>
                  <div className="h-full flex flex-col gap-4 mt-5 text-center md:text-start">
                    {Config.Links.map(function (link, i) {
                      if (link.Title === "") {
                        return (
                          <p
                            className="text-slate-300 dark:text-accent-700"
                            key={link.Path + i}
                          >
                            Coming soon
                          </p>
                        );
                      }
                      return (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={link.Path}
                          key={link.Path}
                        >
                          {link.Title}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="  font-semibold text-lg text-center md:text-start">
                    {"This Site"}
                  </p>
                  <div className="h-full flex flex-col gap-4 mt-5 text-center md:text-start   ">
                    {Config.NavLinks.map(function (link) {
                      return (
                        <Link
                          to={link.Path}
                          key={link.Path}
                          onClickCapture={handleAfterClick}
                        >
                          {link.Title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <FooterEnd
              copyRights={Config.CopyRights}
              footerNote={Config.FooterNote}
            />
          </div>
        </div>
      </>
    );
}

export default Footer;