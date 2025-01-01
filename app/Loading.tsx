import Image from "next/image";
import React from "react";
import LOGO from "@/public/megaRabbitt.png";
import { AnimatePresence, motion } from "motion/react";

const Loading = () => {
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <motion.div
        animate={{rotate: 360, opacity: 1}}
        transition={{
            duration: 3,
            repeat: 360,
            ease: "linear"
        }}
        exit={{opacity: 0, scale: 0}}
        className=""
      >
        <Image src={LOGO} height={100} width={100} alt="loading-img" />
      </motion.div>
    </div>
  );
};

export default Loading;
