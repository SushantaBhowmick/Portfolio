import React from "react";
import {
  SiChakraui,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiRazorpay,
  SiReact,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const Project = () => {
  const projects = [
    {
      title: "Ecommerce web Application",
      tech: [SiMongodb, SiExpress, SiNodedotjs, SiReact, SiMui, SiStripe],
      link: "https://64dab98ca8668a0077f2a5ef--lustrous-queijadas-71f3bf.netlify.app/",
      cover: "/ecom.png",
      background: "bg-indigo-500",
    },
    {
      title: "Course Bundler (E-Learning)",
      tech: [
        SiMongodb,
        SiExpress,
        SiNodedotjs,
        SiReact,
        SiChakraui,
        SiRazorpay,
      ],
      link: "https://my-bcuv20qos-sushantabhowmick.vercel.app/",
      cover: "/cb.png",
      background: "bg-green-500",
    },
    {
      title: "My Portfolio",
      tech: [SiNextdotjs, SiTypescript, SiTailwindcss],
      link: "",
      cover: "/pf.png",
      background: "bg-orange-500",
    },
    {
      title: "ChatApp",
      tech: [SiReact, SiFirebase, SiChakraui],
      link: "https://62fb87b436ee5813f82fa1c6--cheery-choux-42202b.netlify.app/",
      cover: "/chat.png",
      background: "bg-red-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        title="Projects 🎯"
        className="flex flex-col items-center justify-center rotate-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((item, i) => {
          return (
            <Link href={item.link} key={i}>
              <div className={cn("p-5 rounded-md", item.background)}>
                <DirectionAwareHover
                  imageUrl={item.cover}
                  className="w-full cursor-pointer"
                >
                 <div className=" space-y-5">
                 <h1 className=" text-2xl font-bold">{item.title}</h1>
                  <div className="flex items-center gap-5">
                    {item.tech.map((Icon, i) => (
                      <Icon className="w-7 h-7" key={i} />
                    ))}
                  </div>
                 </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
