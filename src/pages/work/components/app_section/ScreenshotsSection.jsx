import { useRef } from "react";
import { useInView } from "framer-motion";

import FallbackImage from "../../../../shared/FallbackImage";

// Phone-screenshot placeholder shape, so missing assets still look intentional.
const PHONE = "w-[190px] h-[400px] md:w-[210px] md:h-[430px]";
// Real screenshots: match the phone width, keep aspect ratio (FallbackImage
// applies `className` to the <img> and `wrapperClassName` to the placeholder).
const PHONE_IMG = "w-[190px] md:w-[210px] h-auto rounded-2xl shadow-lg shadow-accent-300/40 dark:shadow-black/40";

function ScreenshotsSection({ name, hasDark, isDark }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const shot = (i) =>
    `/static/images/work/apps/${name}/screenshot_${i}_${
      hasDark && isDark ? "dark" : "light"
    }.webp`;

  return (
    <div
      className="flex"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        scrollMargin: "120px",
      }}
    >
      <div
        className="justify-center mx-5 mt-5"
        style={{
          transform: isInView ? "translateY(80px)" : "translateY(100px)",
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          scrollMargin: "120px",
        }}
      >
        <FallbackImage
          src={shot(1)}
          alt={name}
          label={name}
          className={`-translate-y-10 md:translate-y-0 ${PHONE_IMG}`}
          wrapperClassName={`-translate-y-10 md:translate-y-0 ${PHONE}`}
        />
      </div>
      <div
        className="justify-center hidden mx-5 mt-5 md:block"
        style={{
          transform: isInView ? "translateY(40px)" : "translateY(100px)",
          transition: "all 0.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          scrollMargin: "120px",
        }}
      >
        <FallbackImage
          src={shot(2)}
          alt={name}
          label={name}
          className={PHONE_IMG}
          wrapperClassName={PHONE}
        />
      </div>
      <div
        className="justify-center hidden mx-5 mt-5 sm:flex"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          transition: "all 1.0s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          scrollMargin: "120px",
        }}
      >
        <FallbackImage
          src={shot(3)}
          alt={name}
          label={name}
          className={PHONE_IMG}
          wrapperClassName={PHONE}
        />
      </div>
    </div>
  );
}

export default ScreenshotsSection;
