import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiTwitter, SiX } from "react-icons/si";

const Navbar = () => {
  const socials = [
    {
      link: "https://in.linkedin.com/in/sushanta-bhowmick-a9b98421b?trk=public_profile_samename-profile",
      label: "Linkedin",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/SushantaBhowmick",
      label: "GitHub",
      icon: SiGithub,
    },
    {
      link: "https://twitter.com/Sushant31147320",
      label: "X",
      icon: SiX,
    },
  ];

  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Sushanta Bhowmick 🧑🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link href={item.link} key={i} aria-label={item.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
