import { useEffect } from "react";
import { useAnimate } from "framer-motion";

import NavBarItems from "./nav_items/NavBarItems";


function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.2 },
          ],
        ]
      : [
          [
            "nav",
            { transform: "translateX(-100%)" },
            {duration: 0.2 },
            { at: "-0.1" },
          ],
        ];

    animate([
      
      ...menuAnimations,
    ]);
  }, [animate, isOpen]);

  return scope;
}

export default function MobileNavBar({isOpen, setIsOpen}) {
  const scope = useMenuAnimation(isOpen);

  return (
    <div ref={scope}>
      <nav
        className={`block md:hidden fixed bg-accent-100  dark:bg-accent-900 w-56 h-full mt-16 z-30 shadow-lg ${
          !isOpen && "hidden"
        }`}
        transform="translateX(-100%)"
      >
        <NavBarItems
          className={"m-5 h-10 flex items-center"}
          setIsOpen={setIsOpen}
        />
      </nav>
    </div>
  );
}


