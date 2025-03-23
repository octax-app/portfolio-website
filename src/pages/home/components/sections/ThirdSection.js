import { useRef } from "react";
import { useInView } from "framer-motion";

function ThirdSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="flex justify-center mt-36"
      id="efficient-section"
      style={{
        transform: isInView ? "none" : "translateX(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        scrollMargin: "120px",
      }}
    >
      <div className="max-w-[944px] w-full flex flex-col gap-3 items-start px-10 md:px-5 lg:px-0">
        <div className="text-3xl font-black text-accent-700 dark:text-accent-300">
          Optimized <span className="text-[#5f6cf1]"> Web</span> &{" "}
          <span className="text-[#5f6cf1]">Mobile</span> efficiency.
        </div>
        <div className="text-accent-600 dark:text-accent-400">
          {
            "Optimal performance, resource optimization, streamlined execution, fast."
          }
        </div>
        <img
          className="mt-5"
          src="/static/images/home/home-section-3.png"
          alt="home-section-3"
        />
      </div>
    </div>
  );
}

export default ThirdSection;
