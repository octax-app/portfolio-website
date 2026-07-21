import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

import Badge from "../../../../shared/Badge";
import ScreenshotsSection from "./ScreenshotsSection";
import StoreLinks from "./StoreLinks";

function AppSection({
  name,
  slug,
  label,
  hasDark,
  isDark,
  tags = [],
  appStore,
  playStore,
  huaweiStore,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="flex justify-center mt-10 mb-28 md:mb-40"
      id={`${label}-section`}
    >
      <div className="max-w-[944px] w-full flex flex-col gap-3 items-start px-7 md:px-5 lg:px-0">
        <div
          className="text-3xl font-black text-accent-700 dark:text-accent-300 mb-1 md:mb-0"
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            scrollMargin: "120px",
          }}
        >
          {name}
        </div>

        {tags.length > 0 && (
          <div
            className="flex flex-wrap gap-2"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
            }}
          >
            {tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        )}

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
        </div>

        <div
          className="flex flex-wrap items-center gap-3 mt-1"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          <StoreLinks
            appStore={appStore}
            playStore={playStore}
            huaweiStore={huaweiStore}
          />
          <Link
            to={`/work/${label}`}
            className="text-blue-500 dark:text-primary font-semibold"
          >
            read more →
          </Link>
        </div>

        <ScreenshotsSection name={label} hasDark={hasDark} isDark={isDark} />
      </div>
    </div>
  );
}

export default AppSection;
