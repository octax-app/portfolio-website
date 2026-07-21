import { useRef } from "react";
import { useInView } from "framer-motion";

// Scroll-into-view reveal, matching the animation language used on the home page.
function Reveal({ children, delay = 0.15, x = 0, y = 40, className = "", id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      style={{
        transform: isInView ? "none" : `translate(${x}px, ${y}px)`,
        opacity: isInView ? 1 : 0,
        transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
        scrollMargin: "120px",
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;
