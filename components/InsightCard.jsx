"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex flex-col md:flex-row gap-4"
    >
      <img
        src={imgUrl}
        alt={`Planet-${index}`}
        className="md:w-[270px] w-full h-[200px] rounded-[32px] object-cover"
      />

      <div className="w-full flex justify-between items-center">
        <div className="flex-1 flex flex-col md:ml-[62px] max-w-[650px]">
          <h4 className="font-semibold text-[26px] lg:text-[42px] text-white">
            {title}
          </h4>
          <p className="font-normal lg:text-[20px] text-[14px] mt-[16px] text-[#b0b0b0]">
            {subtitle}
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-center w-[75px] xl:w-[100px] h-[75px] xl:h-[100px] rounded-full bg-transparent border-[1px] border-white">
          <img
            src="arrow.svg"
            alt="Arrow Icon"
            className="w-[30%] h-[30%] object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;
