"use client"
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegPauseCircle } from "react-icons/fa";

import { motion } from "framer-motion";

export const AudioPlayer = () => {
    return(
        <div className="md:w-[340px] md:h-[440px] w-full md:py-0 py-4 bg-indigo-500 flex flex-col items-center justify-center rounded-3xl shadow-lg md:gap-5 gap-2">
            <h2 className="md:text-4xl text-2xl">Play note</h2>
            

            <motion.span whileHover={{ scale: 1.2 }} className="md:block hidden cursor-pointer hover:text-slate-200">
                <FaRegCirclePlay size={100}/>
            </motion.span>


            <motion.span whileHover={{ scale: 1.2 }} className="md:hidden block cursor-pointer hover:text-slate-200">
                <FaRegCirclePlay size={60}/>
            </motion.span>
        </div>
    )
  }