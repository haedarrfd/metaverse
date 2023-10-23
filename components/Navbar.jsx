"use client";

import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import Image from "next/image";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="padding__x py-8 relative"
    >
      <div className="absolute w-50% inset-0 gradient-01" />

      <div className="inner__width mx-auto flex justify-between gap-8">
        <Image
          src="/search.svg"
          alt="Search"
          width={25}
          height={25}
          className="object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          METAVERSE
        </h2>
        <Image
          src="/menu.svg"
          alt="Menu Hamburger"
          width={25}
          height={25}
          className="object-contain"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
