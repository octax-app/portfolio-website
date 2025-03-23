import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

import ScreenshotsSection from "./ScreenshotsSection";

function AppSection({ name, slug, label, hasDark, isDark }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="flex justify-center mt-12 mb-48 md:mb-72 "
      id={`${label}-section`}
    >
      <div className="max-w-[944px] w-full flex flex-col gap-3 items-start px-7 md:px-5 lg:px-0">
        <div
          className="text-3xl font-black text-accent-700 dark:text-accent-300 mb-3 md:mb-0"
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            scrollMargin: "120px",
          }}
        >
          {name}
        </div>
        <div
          className="text-accent-600 dark:text-accent-400"
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            scrollMargin: "120px",
          }}
        >
          {slug}
          <Link to={`/work/${label}`} className="text-blue-500 dark:text-primary">
            {"read more"}
          </Link>
        </div>

        <ScreenshotsSection name={label} hasDark={hasDark} isDark={isDark} />
      </div>
    </div>
  );
}

export default AppSection;
