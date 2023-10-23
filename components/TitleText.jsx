"use client";

import { motion } from "framer-motion";
import { textVariant2 } from "@/utils/motion";

const TitleText = ({ title, textStyles }) => {
  return (
    <motion.div
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
      {title}
    </motion.div>
  );
};

export default TitleText;
