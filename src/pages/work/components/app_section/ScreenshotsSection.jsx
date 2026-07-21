import { useRef } from "react";
import { useInView } from "framer-motion";

import FallbackImage from "../../../../shared/FallbackImage";

// Phone-screenshot placeholder shape, so missing assets still look intentional.
const PHONE = "w-[190px] h-[400px] md:w-[210px] md:h-[430px]";

function ScreenshotsSection({ name, hasDark, isDark }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const shot = (i) =>
    `/static/images/work/${name}/screenshot_${i}_${
      hasDark && isDark ? "dark" : "light"
    }.png`;

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
        className="justify-center mt-5 mx-5"
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
          className="-translate-y-10 md:translate-y-0"
          wrapperClassName={`-translate-y-10 md:translate-y-0 ${PHONE}`}
        />
      </div>
      <div
        className="justify-center mt-5 mx-5 hidden md:block"
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
          wrapperClassName={PHONE}
        />
      </div>
      <div
        className="justify-center mt-5 mx-5 hidden sm:flex"
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
          wrapperClassName={PHONE}
        />
      </div>
    </div>
  );
}

export default ScreenshotsSection;
