"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion' 
import useChordQuestion from '@/hooks/useChordQuestion'

type InitialCountdown = {
    setShowIntialTimer: React.Dispatch<React.SetStateAction<boolean>>
}
export const InitialCountdown = ({ setShowIntialTimer }: InitialCountdown) => {

    const [countdown, setCountdown] = useState(5)
    const [startGame, setStartGame] = useState(false)

    useEffect(() => {
        if (startGame) {
            const intervalID = setInterval(() => {
                setCountdown(prev => prev - 1)
            }, 1000)
    
            return () => clearInterval(intervalID)
        }
    }, [startGame])

    useEffect(() => {
        if (countdown <= 0) {
            setShowIntialTimer(false)
        }
    }, [countdown])

    const InitialCountdownVariant = {
        initial: {
          scale: 0.1
          },

        after: {
            
          scale: 1,
          transition: {
            ease: "easeOut",
            duration: 0.3
          }
        }
    }      

    return (
        <div className='flex flex-col justify-center items-center h-[80%] md:gap-8 gap-3'>
            {
                startGame ?

                (
                    <>
                        <div className="md:text-4xl text-2xl">Game is starting in</div>
                        <motion.div 
                            key={countdown}
                            variants={InitialCountdownVariant} 
                            initial="initial"
                            animate='after'
                            className='md:text-7xl text-6xl'>{ countdown }</motion.div>
                    </>
                )

                :

                <motion.button 
                    whileHover={{ scale: 1.15 }}
                    onClick={() => setStartGame(prev => !prev)}
                    className='bg-red-400 rounded-lg shadow-md md:w-[60%] p-3 hover:bg-red-300 text-2xl'>
                    Start game
                </motion.button>
            }
        </div>

        )
}


/**
 * 
 * shows how many correct answers the players guess and also the timer 
 */
export const CompetitivePageAboveSection = () => {
    const { currentScore, globalCompetitiveCountdown } = useChordQuestion()

    return (
        <div className='md:mt-0 mt-2 flex justify-between  px-2 items-center md:text-4xl text-2xl'>
            <div className="flex gap-2 items-center">
                <span>Correct: </span>
                <span className='text-red-300'>{ currentScore }</span>
            </div>
            <span className=' font-semibold text-red-300'>{ globalCompetitiveCountdown }</span>
        </div>
  )
}
