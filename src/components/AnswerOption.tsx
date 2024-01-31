"use client"

import { motion } from "framer-motion"

export const AnswerOptions = ({ chordNumber, optionNum }: { chordNumber: number, optionNum: number }) => {
    let optionClassNames = ''
    if (optionNum === 0 || optionNum === 4) optionClassNames = "rounded-xl shadow-lg bg-pink-400 hover:bg-pink-500 p-2 text-3xl font-semibold"
    else if (optionNum === 1 || optionNum === 5) optionClassNames = "rounded-xl shadow-lg bg-orange-500 hover:bg-orange-600 p-2 text-3xl font-semibold"
    else if (optionNum === 2 || optionNum === 6) optionClassNames = "rounded-xl shadow-lg bg-blue-400 <hover:bg-blue-5></hover:bg-blue-5>00 p-2 text-3xl font-semibold"
    else if (optionNum === 3) optionClassNames = "rounded-xl shadow-lg bg-yellow-400 hover:bg-yellow-500 p-2 text-3xl font-semibold"
  
    return(
      <motion.button whileHover={{ scale: 1.1 , x: 40}} className={ optionClassNames }>
        { chordNumber }
      </motion.button>
    )
  }