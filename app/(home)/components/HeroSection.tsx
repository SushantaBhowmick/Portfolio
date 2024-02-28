import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-between min-h-[60vh] flex-col-reverse lg:gap-0 gap-14 lg:flex-row">
      <div className=" space-y-10 lg:text-left text-center">
        <h1 className=" text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋 <br />
          <span className=" underline underline-offset-8 decoration-green-500">
            {"I'm Sushanta"}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in India, I'm a Fullstack developer passionate about building modern web application that users love."
          }
        </p>

        <Link
          href={"mailto:bhosushanta922@gmail.com"}
          className="inline-block group"
        >
          <h1 className="text-3xl font-bold group-hover:text-green-400 transition-all">
            Contact Me 📭
          </h1>
          <div className="w-40 h-2 bg-green-500 rounded-full"></div>
          <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
        </Link>
      </div>

      <div className="relative">
      <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className=" h-32 w-32 rounded-2xl bg-green-500"></div>
            <div className=" h-32 w-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className=" h-32 w-32 rounded-2xl bg-indigo-500"></div>
            <div className=" h-32 w-32 rounded-full bg-green-500"></div>
          </div>
          <div className=" glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        
        <div className=" absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
        <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold" >
            <p>📢 Available for Work</p>
        </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
