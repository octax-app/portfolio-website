import { motion } from "framer-motion";

// Consistent page heading used across Work / Skills / Experience / Studio.
function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="flex justify-center mt-12 md:mt-20">
      <div className="max-w-[944px] w-full px-7 md:px-5 lg:px-0 plus-font">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-primary mb-3"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
          className="text-4xl md:text-5xl font-black text-accent-700 dark:text-accent-300"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 max-w-2xl text-lg text-accent-600 dark:text-accent-400"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

export default PageHeader;
