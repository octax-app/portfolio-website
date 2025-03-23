import { useRef } from "react";
import { useInView } from "framer-motion";

function ScreenshotsSection({ name, hasDark, isDark }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        id="clean-section"
        style={{
          transform: isInView ? "translateY(80px)" : "translateY(100px)",
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          scrollMargin: "120px",
        }}
      >
        <img
          className="-translate-y-10 md:translate-y-0"
          src={`/static/images/work/${name}/screenshot_1_${
            hasDark && isDark ? "dark" : "light"
          }.png`}
          alt={name}
        />
      </div>
      <div
        className="justify-center mt-5 mx-5 hidden md:block"
        id="clean-section"
        style={{
          transform: isInView ? "translateY(40px)" : "translateY(100px)",
          transition: "all 0.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          scrollMargin: "120px",
        }}
      >
        <img
          src={`/static/images/work/${name}/screenshot_2_${
            hasDark && isDark ? "dark" : "light"
          }.png`}
          alt={name}
        />
      </div>
      <div
        className="block justify-center mt-5 mx-5 hidden sm:flex"
        id="clean-section"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          transition: "all 1.0s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          scrollMargin: "120px",
        }}
      >
        <img
          src={`/static/images/work/${name}/screenshot_3_${
            hasDark && isDark ? "dark" : "light"
          }.png`}
          alt={name}
        />
      </div>
    </div>
  );
}

export default ScreenshotsSection;
