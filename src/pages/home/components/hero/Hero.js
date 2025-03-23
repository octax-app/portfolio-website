
import { motion, stagger } from "framer-motion";

import HelloSvg from "./hero_svgs/HelloSvg";
import HeroSvg from "./hero_svgs/HeroSvg";
import StackSvg from "./hero_svgs/StackSvg";

import {App} from '../../../../config/AppConfig';

const style = {
  borderBottom: "2px solid transparent",
  borderImage:
    "linear-gradient(0.25turn, #00000000, var(--secondary), #00000000)",
  borderImageSlice: 1,
};

function Hero() {
  return (
    <div className="flex justify-center md:h-[423px] ">
      <div
        className="max-w-[944px] w-full flex items-end"
        style={style}
      >
        <HeroText />
        <HeroSvg />
      </div>
    </div>
  );
}

export default Hero;

const pVariants = {
  open: {
    opacity: 1,
    transform: "translate(0%, 0%)",
    transition: {
      duration: 0.5,
      stagger: stagger(0.5),
    },
  },
  closed: {
    opacity: 0,
    transform: "translate(0%, -30%)",
    transition: {
      duration: 0.5,
      stagger: stagger(0.0),
    },
  },
};

function HeroText() {
  return (
    <div className="w-full h-full flex flex-col text-accent-700 dark:text-accent-300 justify-between items-center md:items-start plus-font px-0 md:px-5">
      <div className="flex flex-col items-center md:items-start">
        <motion.p
          variants={pVariants}
          initial="closed"
          animate="open"
          className="leading-none text-[25px] mt-20 flex gap-2 items-center"
        >
          Hi <HelloSvg />
        </motion.p>
        <motion.p
          variants={pVariants}
          initial="closed"
          animate="open"
          className="text-[40px] font-extrabold "
        >
          I’m <span className="dark:text-primary">{"Haitham"}</span>,
        </motion.p>
        <motion.p
          variants={pVariants}
          initial="closed"
          animate="open"
          className="px-20 md:px-0 text-center md:text-start text-xl"
        >
          a{" "}
          <span className="font-bold dark:text-primary dark:font-semibold">
            {" "}
            Full-stack developer
          </span>
          , who can craft a
          <span className="font-bold dark:text-primary dark:font-semibold">
            {" "}
            Clean
          </span>
          ,
          <span className="font-bold dark:text-primary dark:font-semibold">
            {" "}
            Elegant
          </span>
          , &
          <span className="font-bold dark:text-primary dark:font-semibold">
            {" "}
            Efficient{" "}
          </span>
          Web & Mobile Applications
        </motion.p>
      </div>

      <motion.a
        className="px-10 py-2.5 mt-5 rounded-full  w-fit bg-accent-700 dark:bg-primary text-white font-normal text-[18px] hero-button cursor-pointer select-none"
        initial={{ scale: 0.0 }}
        animate={{ scale: 1.0 }}
        whileTap={{ scale: 0.95 }}
        href={`https://wa.me/${App.AboutMe.PhoneNumber}`}
        target="_blank"
        rel="noreferrer"
      >
        {"Get in Touch"}
      </motion.a>
      <div>
        <motion.p
          variants={pVariants}
          initial="closed"
          animate="open"
          className="mt-5 text-lg"
        >
          {"Current favorite tech stack/tools:"}
        </motion.p>
        <motion.div
          variants={pVariants}
          initial="closed"
          animate="open"
          className="mt-2 mb-1 flex gap-4 items-center"
        >
          <StackSvg type={"flutter"} onHoverColor={"#00D0FF"} />
          <StackSvg type={"laravel"} onHoverColor={"#f34f43ff"} />
          <StackSvg type={"react"} onHoverColor={"#61dbfbff"} />
          <StackSvg type={"bootstrap"} onHoverColor={"#573e7fff"} />
          <StackSvg type={"tailwind"} onHoverColor={"#38bdf8ff"} />
          <StackSvg type={"line"} onHoverColor={"#94A3B8"} />
          <StackSvg type={"vscode"} onHoverColor={"#1f9cf0ff"} />
          <StackSvg type={"figma"} onHoverColor={"#ad00ffff"} />
        </motion.div>
      </div>
    </div>
  );
}
