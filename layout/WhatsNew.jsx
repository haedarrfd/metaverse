"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { TitleText, TypingText, NewFeatures } from "@/components";
import { newFeatures } from "@/constans";

const WhatsNew = () => {
  return (
    <section className="paddings relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="inner__width mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] flex flex-col justify-center"
        >
          <TypingText title="| What's New?" />
          <TitleText title={<>What's new about Metaverse?</>} />

          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={planetVariants("right")}
          className="flex-1 flex__center"
        >
          <img
            src="/whats-new.png"
            alt="What's New Image"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
