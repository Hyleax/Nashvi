"use client"
import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'

type MenuBtnProps = {
    route: string
    bntText: string
    icon: React.JSX.Element
}

export const MenuBtn = (props: MenuBtnProps) => {
    const { route, bntText, icon } = props
    
    return(
        <Link href={route}>
            <motion.div 
                whileHover={{ y: -20 }} 
                className="md:w-[250px] md:h-[250px] w-[150px] h-[150px] 
                    border-2 shadow-lg rounded-2xl flex flex-col justify-center 
                    items-center gap-2 bg-indigo-800 hover:bg-red-300 hover:text-black 
                    transition-bg duration-100"
            >
                { icon }
                <h2 className='md:text-3xl text-xl whitespace-normal px-2 text-center'>{bntText}</h2>
            </motion.div>
        </Link>
    )
}
