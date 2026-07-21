import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import HelloSvg from "./hero_svgs/HelloSvg";
import CodeWindow from "./CodeWindow";

import { App as Config } from "../../../../config/AppConfig";

function Hero() {
  const { Hero: hero } = Config.Home;
  const whatsapp = `https://wa.me/${Config.AboutMe.PhoneNumber}`;

  return (
    <section className="flex justify-center mt-8 md:mt-14 px-7 md:px-5 lg:px-0">
      <div className="max-w-[944px] w-full">
        <div className="rounded-[2rem] border-2 border-accent-200 dark:border-accent-700 bg-accent-50 dark:bg-accent-800 shadow-xl shadow-accent-200/40 dark:shadow-black/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 p-7 sm:p-10 md:p-12 items-center">
            {/* Text */}
            <div className="plus-font order-2 md:order-1 text-center md:text-left">
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xs font-bold uppercase tracking-[0.15em] text-blue-500 dark:text-primary mb-3"
              >
                {hero.eyebrow}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center md:justify-start gap-2 text-[22px] text-accent-600 dark:text-accent-300"
              >
                {hero.greeting} <HelloSvg />
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-2 text-4xl md:text-[42px] font-black leading-tight text-accent-700 dark:text-accent-200"
              >
                I craft <span style={{ color: "#f0b429" }}>clean</span>,{" "}
                <span style={{ color: "#ff8478" }}>elegant</span> &{" "}
                <span style={{ color: "#5f6cf1" }}>efficient</span> apps.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 text-accent-600 dark:text-accent-400"
              >
                {hero.subtitle}
              </motion.p>

              <div className="flex flex-wrap gap-3 mt-7 justify-center md:justify-start">
                <motion.a
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  whileTap={{ scale: 0.95 }}
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-2.5 rounded-full bg-accent-700 dark:bg-primary text-white font-semibold hero-button"
                >
                  {hero.primaryCta}
                </motion.a>
                <Link
                  to="/work"
                  onClickCapture={() => window.scrollTo({ top: 0, left: 0 })}
                  className="px-7 py-2.5 rounded-full border-2 border-accent-300 dark:border-accent-600 text-accent-700 dark:text-accent-200 font-semibold hover:bg-accent-200 dark:hover:bg-accent-700/60 transition-colors"
                >
                  {hero.secondaryCta}
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="order-1 md:order-2">
              <CodeWindow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
