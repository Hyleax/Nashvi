"use client"
import React from 'react'
import { l_spartan } from '@/utils/fonts'
import { motion } from 'framer-motion'
import Link from 'next/link'

const TrainBtn = () => {
  return (
    <Link href={'/training'}>
        <motion.button whileHover={{ scale: 1.2 }} className={` bg-red-400 px-10 py-2 rounded-full text-white font-semibold
            ${l_spartan.className} md:text-xl text-sm hover:bg-red-500 shadow-md tracking-wide`}>
                Practice listening and identifying chords
        </motion.button>
    </Link>
  )
}

export default TrainBtn