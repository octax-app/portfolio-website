import { useRef } from "react";
import { useInView } from "framer-motion";


function FirstSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="flex justify-center mt-36"
      id="clean-section"
      style={{
        transform: isInView ? "none" : "translateX(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        scrollMargin: "120px",
      }}
    >
      <div className="max-w-[944px] w-full flex flex-col gap-3 items-start px-10 md:px-5 lg:px-0">
        <div className="text-3xl font-black text-accent-700 dark:text-accent-300">
          Minimalist <span className="text-[#fbd15b]">code</span>, Modern{" "}
          <span className="text-[#fbd15b]">design</span>.
        </div>
        <div className="text-accent-600 dark:text-accent-400">
          {"Modern touch, clean UI, seamless UX, delightful experience."}
        </div>
        <img
          className="mt-5"
          src="/static/images/home/home-section-1.png"
          alt="home-section-1"
        />
      </div>
    </div>
  );
}

export default FirstSection;
