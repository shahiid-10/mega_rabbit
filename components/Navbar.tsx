import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, useAnimate, motion } from "framer-motion";
import Image from "next/image";
import LOGO from "@/public/megaRabbitt.png";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const handleMenuClick = () => {
    animate([
      [".menu", { scale: 1.1 }, { duration: 0.2, at: "<" }],
      [".menu", { scale: 1 }],
    ])
    setMenuOpen(!menuOpen);
  };



  return (
    <nav ref={scope} className="flex justify-center items-center px-1 sticky z-[2] top-0 h-[80px] bg-white">
      <div className="absolute left-4 md:left-[4rem] flex justify-center items-center">
        <h1 className="font-[nippo] text-xl font-semibold tracking-wider flex items-center justify-center">
          Mega
          <motion.span
            animate={{ rotate: menuOpen ? 360 : 0 }}
            transition={{ duration: 1 }}
            className="logo"
          >
              <Image src={LOGO} width={40} height={40} alt="logo" priority={true}/>
          </motion.span>
          Rabbit
        </h1>
      </div>

      <motion.div
        className="menu flex h-[35px] w-[35px] px-1 md:px-0 md:h-[50px] md:w-[50px] absolute right-4 md:right-[4rem] cursor-pointer justify-center items-center text-black rounded-full border-[#1D3244] border-2"
        onClick={handleMenuClick}
      >
        {menuOpen ? (
          <X className="transition-all ease-in-out duration-300" />
        ) : (
          <Menu className="transition-all ease-in-out duration-300" />
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {menuOpen ? (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="links hidden md:flex justify-center items-center gap-[1rem] font-bold tracking-wider  font-[bevellier]"
          >
            {["Home", "Explore", "About", "GMEGA"].map((item, index) => (
              <Link href="/" key={index}>
                <h1  className="transition-all ease-in-out duration-300 px-2 rounded-full border-[1.7px] border-[#172A3A]/80 text-[#221D1D] hover:bg-black hover:text-white cursor-pointer">
                  {item}
                </h1>
              </Link>
            ))}
          </motion.div>
        ) :  null}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -80, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute z-[2] h-[50vh] w-[50vw] top-[80px] bg-lime-300 right-[3rem] p-2 flex-col justify-center items-center"
            style={{
              clipPath: "polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%)"
            }}
          >
            <div className="h-full w-full bg-black flex flex-col px-4 py-4 items-center justify-around"
              style={{
                clipPath: "polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%)"
              }}>
              {["Home", "Explore", "About", "GMEGA"].map((item) => (
                <div key={item} className="h-[45px] w-[4.5rem] rounded-full bg-[#9BEC66]">
                  <div className="h-[40px] w-[4.5rem] rounded-full bg-white flex justify-center items-center border-black/90 border hover:h-[45px] transition-all">
                    <Link href="/"><h1 className="font-bold tracking-wider  font-[bevellier]">{item}</h1></Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;