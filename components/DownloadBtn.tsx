"use client"

import React from 'react'
import { MovingBorderBtn } from './ui/moving-border'

const DownloadBtn = () => {


  return (
        <a href="" download={'/resume.pdf'}>
            <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold" >
            <p>📢 Available for Work</p>
        </MovingBorderBtn>
        </a>
  )
}

export default DownloadBtn