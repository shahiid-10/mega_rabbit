"use client"
import React from "react";
import Main_rabbit from "@/public/Picsart_24-12-31_13-43-16-508.png";
import Image from "next/image";
import { TextLoop } from "./ui/TextLoop";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center  border-b-4 border-[#9BEC66] ">
      <div className="w-full   bg-black/80 relative flex justify-between pr-[4rem] items-center">
        <Image
          src={Main_rabbit}
          height={100}
          width={120}
          alt="main_rabbit"
          className="mt-[3rem] md:mt-0 h-[150px] md:h-[280px] w-[200px]  md:w-[300px]  object-contain"
        />
        <div className="absolute top-5 left-[9rem] md:left-[15rem] hidden md:block">
          <SpeechBubble />
        </div>

        <div className="flex gap-[1rem] md:gap-[4rem]">
          <div className="links h-[50px] w-[50px] rounded-full bg-[#9BEC66] ">
            <Link href={"https://x.com/MegaRabbitNFT"}>
              <div className="h-[47px] w-[47px] rounded-full bg-white flex justify-center items-center border-black/90 border hover:h-[50px] hover:w-[50px] transition-all">
                <FaXTwitter className=" object-contain" size={24} />
              </div>
            </Link>
          </div>
          <div className="links h-[50px] w-[50px] rounded-full bg-[#9BEC66]">
            <Link href={"https://discord.gg/megaeth"}>
              <div className="h-[47px] w-[47px] rounded-full bg-white flex justify-center items-center border-black/90 border hover:h-[50px] hover:w-[50px] transition-all">
                <FaDiscord className=" object-contain" size={24} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SpeechBubble = () => {
  return (
    <div className="relative max-w-sm">
      <div className="bg-white px-2 py-2 md:p-4 rounded-lg border border-black shadow-sm">
        <h3 className="font-[bevellier] font-medium text-black flex gap-2">
          United we,
          <TextLoop interval={1.5}>
            {[
              <span key="1" className="font-bold">
                Connect
              </span>,
              <span key="2" className="font-bold">
                Share
              </span>,
              <span key="3" className="font-bold">
                Create
              </span>,
              <span key="4" className="font-bold">
                GMEGA!
              </span>,
            ]}
          </TextLoop>
        </h3>
      </div>
      <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white border-b-2 border-r-2 border-black transform rotate-45"></div>
    </div>
  );
};

export default Footer;
