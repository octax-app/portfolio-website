import { motion } from "framer-motion";

import InfoCard from "./card/Card";

const cardVariants = {
  open: {
    opacity: 1,
    transform: "translate(0%, 0%)",
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    transform: "translate(0%, -30%)",
    transition: {
      duration: 0.4,
    },
  },
};

function InfoCards({scroll}) {
  const handleClick = (to) => {
    document.getElementById(to).scrollIntoView({ behavior: "smooth" });
  };

    return (
      <motion.div
        variants={cardVariants}
        initial="closed"
        animate="open"
        className="flex justify-center md:h-[145px] mt-20"
      >
        <div className="max-w-[944px] w-full flex flex-col md:flex-row  justify-between gap-5 px-6 md:px-5 lg:px-0">
          <InfoCard
            title={"Clean"}
            text={"Modern touch, clean UI, seamless UX, delightful experience."}
            goto={() => handleClick("clean-section")}
          />
          <InfoCard
            title={"Elegant"}
            text={
              "Beautiful design, delightful user experience, pleasing aesthetics."
            }
            goto={() => handleClick("elegant-section")}
          />
          <InfoCard
            title={"Efficient"}
            text={
              "Optimal performance, resource optimization, streamlined execution, fast."
            }
            goto={() => handleClick("efficient-section")}
          />
        </div>
      </motion.div>
    );
}

export default InfoCards;