"use client";
import React, { useEffect } from "react";
import Hero_Rabbit from "../public/running_rabbit.png";
import Image from "next/image";
import { MoveDown, MoveUp } from "lucide-react";
import { TextShimmer } from "./ui/TextShimmer";
import { motion, useAnimate } from "motion/react";
import Clouds from "@/public/clouds.png";
import { stagger } from "motion";

const Hero = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [".clouds", { opacity: 1 }, { delay: stagger(2), duration: 0.6 }],
      [".hero-title", { opacity: 1 }, { duration: 0.5 }],
      [".hero-title", { opacity: 1 }, { duration: 0.5 }],
      [".gmega", { opacity: 1, scale: 1 }, { duration: 0.5 }],
      [".hero-p", { opacity: 1, y: 50 }, { duration: 0.5 }],
    ]);
  }, []);

  return (
    <main className="" ref={scope}>
      <div className=" absolute -z-[1] bottom-0 flex justify-end items-center ">
        <div className="h-[200px]  w-[80vw] bg-slate-300 blur-3xl rounded-full relative"></div>
      </div>
      <div className="hidden md:block  absolute z-[-10000] overflow-hidden ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          className="clouds relative flex"
        >
          <motion.div
            animate={{
              x: [0, -1920],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex shrink-0"
          >
            <Image
              src={Clouds}
              height={100}
              width={100}
              alt="clouds"
              className="w-screen h-full contrast-75 brightness-110 shrink-0"
            />
            <Image
              src={Clouds}
              height={100}
              width={100}
              alt="clouds"
              className="w-screen h-fullcontrast-75 brightness-110 shrink-0"
            />
          </motion.div>
        </motion.div>
      </div>
      <div>
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          className="gmega pointer-events-none m-auto mt-[5rem] md:mt-[1rem] text-xl md:text-2xl  font-[bevellier] tracking-widest text-[#9BEC66] px-3 py-1 border-2  rounded-full flex justify-center items-center bg-black w-fit"
        >
          <p>GMEGA!!</p>
        </motion.span>
        <motion.h1
          initial={{ opacity: 0 }}
          className=" hero-title w-full font-[nippo]  text-center mt-[3rem]  md:mt-0"
        >
          <span className=" text-[#9BEC66] text-[14vw] md:text-[15vw]">
            Mega
          </span>
          <span className="text-[14vw] md:text-[15vw]">Ra</span>
          <span className="py-2 border-b-2 md:border-b-4 rounded-full  h-full ">
            <span className="text-[14vw] md:text-[15vw]">b</span>
            <span className="md:text-2xl">‿</span>
            <span className="text-[14vw] md:text-[15vw]">b</span>
          </span>
          <span className="text-[14vw] md:text-[15vw]">it</span>
        </motion.h1>
        <motion.h5
          initial={{ opacity: 0 }}
          className="hero-p text-center font-[comico] text-xl md:text-3xl text-wrap mt-[2rem] md:mt-[1rem]"
        >
          the first PFP launching on{" "}
          <span className="font-[nippo] font-semibold">
            <div className="md:hidden"></div>
            <TextShimmer>Megaeth_labs</TextShimmer>
          </span>
          🐰
        </motion.h5>
      </div>
      <div className="flex justify-end md:justify-between px-[1rem]">
        <div className="  hidden  md:block mt-[7rem] ">
          <MoveUp size={30} />

          <MoveDown size={30} />
        </div>
        <div className="mt-[3rem] md:mt-0 ">
          <motion.div
            className="rabbit h-[110px] md:h-[180px] w-[90px] md:w-[120px] mt-[2rem] mb-[6rem] md:mb-2 md:mt-0 bg-black border-2 rounded-full relative"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <div className="h-[100px] md:h-[170px] w-[80px] md:w-[110px] bg-white top-0 left-0 rounded-full">
              <Image
                src={Hero_Rabbit}
                height={100}
                width={100}
                alt="Hero_rabbit"
                className="h-full w-full object-contain drop-shadow-2xl shadow-black"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
