"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { TitleText, TypingText, InsightCard } from "@/components";
import { insights } from "@/constans";

const Insights = () => {
  return (
    <section className="paddings relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="inner__width mx-auto flex flex-col"
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText title="Insight about metaverse" textStyles="text-center" />

        <div className="flex flex-col gap-[30px] mt-[50px]">
          {insights.map((insight, index) => (
            <InsightCard key={`insight-${index}`} {...insight} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
