import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";



function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [
        "div.top",
        { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
        { delay: stagger(0.1), at: "-0.1" },
      ],
    ]);
  }, [animate]);

  return scope;
}

function Slug() {
    const scope = useMenuAnimation();

    return (
      <div className="flex justify-center h-[300px] md:h-[400px] mt-20">
        <motion.div
          ref={scope}
          initial="closed"
          animate="open"
          className="max-w-[944px] w-full h-full flex flex-col justify-around px-6 md:px-32 text-accent-700 dark:text-accent-300"
        >
          <div className="top text-start text-4xl md:text-6xl font-black ">
            Crafting
          </div>
          <div className="top text-4xl md:text-6xl flex justify-center">
            with a<div className="font-black">&nbsp; keen eye</div>
          </div>
          <div className="top text-4xl md:text-6xl flex justify-end">
            for <div className="font-black">&nbsp;Details</div>.
          </div>
        </motion.div>
      </div>
    );
}

export default Slug;