"use client"

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiChakraui, SiExpress, SiGit, SiMongodb, SiMui, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSupabase, SiTailwindcss } from 'react-icons/si'

const Skills = () => {

  const skills = [
    { text:"React",Icon:SiReact},
    { text:"Next.js",Icon:SiNextdotjs},
    { text:"Tailwind",Icon:SiTailwindcss},
    { text:"Material Ui",Icon:SiMui},
    { text:"Chakra Ui",Icon:SiChakraui},
    { text:"Git",Icon:SiGit},
    { text:"Node.js",Icon:SiNodedotjs},
    { text:"Express.js",Icon:SiExpress},
    { text:"MongoDB",Icon:SiMongodb},
    { text:"Postgresql",Icon:SiPostgresql},
    { text:"Supabase",Icon:SiSupabase},
    { text:"MySql",Icon:SiMysql},
  ]


  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title title='Skills 🦾' className='flex flex-col items-center justify-center -rotate-6'/>

      <HoverEffect items={skills} />
    </div>
  )
}

export default Skills