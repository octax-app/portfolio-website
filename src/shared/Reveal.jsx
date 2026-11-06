import { useRef } from "react";
import { useInView } from "framer-motion";

// Scroll-into-view reveal with a soft spring overshoot.
function Reveal({ children, delay = 0.1, x = 0, y = 32, className = "", id, as: Tag = "div" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <Tag
      ref={ref}
      id={id}
      className={className}
      style={{
        transform: isInView ? "none" : `translate(${x}px, ${y}px) scale(0.98)`,
        opacity: isInView ? 1 : 0,
        transition: `transform 0.7s cubic-bezier(0.34, 1.4, 0.64, 1) ${delay}s, opacity 0.5s ease ${delay}s`,
        scrollMargin: "120px",
      }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
