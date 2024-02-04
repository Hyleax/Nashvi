"use client"

import { motion } from "framer-motion"
import { FaRegCirclePlay } from "react-icons/fa6";

// import hook
import useChordQuestion from "@/hooks/useChordQuestion";
import { useEffect, useState } from "react";
import { checkCorrectChord } from "@/utils/chords";
import { playSample } from "@/utils/samples";
import * as Tone from "tone"


const pinkBG = "rounded-xl shadow-lg bg-pink-400 hover:bg-pink-500 p-2 text-3xl font-semibold"
const orangeBG = "rounded-xl shadow-lg bg-orange-500 hover:bg-orange-600 p-2 text-3xl font-semibold"
const blueBG=  "rounded-xl shadow-lg bg-blue-400 hover:bg-blue-500 p-2 text-3xl font-semibold"
const yellowBG = "rounded-xl shadow-lg bg-yellow-400 hover:bg-yellow-500 p-2 text-3xl font-semibold"
const successBG = "rounded-xl shadow-lg bg-emerald-400 p-2 text-3xl font-semibold"
const errorBG = "rounded-xl shadow-lg bg-red-600 p-2 text-3xl font-semibold"



export const AnswerOptions = ({ chordNumber, optionNum }: { chordNumber: number, optionNum: number }) => {

  const [btnClassNames, setBtnClassNames] = useState("")
  const { chordQuestion, getNewChord, isAnswered, revealAnswer } = useChordQuestion()


    const handleClick = async() => {
      await revealAnswer()
      getNewChord()
    }

    useEffect(() => {
      const reColorBtns = () => {
        if (optionNum === 0 || optionNum === 6) setBtnClassNames(pinkBG)
        else if (optionNum === 1 || optionNum === 5) setBtnClassNames(orangeBG) 
        else if (optionNum === 2 || optionNum === 4) setBtnClassNames(blueBG)
        else if (optionNum === 3) setBtnClassNames(yellowBG)
      }

      if (isAnswered) {
        const isCorrectChord = checkCorrectChord(chordQuestion?.keyName as string, optionNum + 1, chordQuestion?.pickedChord.chordName as string)
        if (isCorrectChord) setBtnClassNames(successBG)
        else setBtnClassNames(errorBG)
      } else {
        reColorBtns()
      }
      
      

    }, [isAnswered])
  
    return(
      <motion.button onClick={() => handleClick()} whileHover={{ scale: 1.1 , x: 40}} className={ btnClassNames }>
        { chordNumber }
      </motion.button>
    )
  }



export const AudioPlayer = () => {

    const { chordQuestion } = useChordQuestion()
    const keyName = chordQuestion?.keyName
    const chordName = chordQuestion?.pickedChord.chordName
    // const correctChordNumber = chordQuestion?.pickedChord.numberName


    // useEffect(() => {

    // },[])


    const handleClick = (chordName: string) => {
      const octave = 3
      // playSample(`${chordName}${octave}`)
    }

    return(
        <div className="md:w-[340px] md:h-[440px] w-full md:py-0 py-3 bg-indigo-500 flex md:flex-col flex-row items-center justify-around md:px-0 px-5 rounded-3xl shadow-lg md:gap-5">

            {/* play root chord of key */}
            <div className="flex items-center text-red-300 gap-3">
              <motion.span onClick={() => handleClick(keyName as string)} whileHover={{ scale: 1.2 }} className="md:block hidden cursor-pointer hover:text-red-200 ">
                  <FaRegCirclePlay size={70}/>
              </motion.span>

              <motion.span whileHover={{ scale: 1.2 }} className="md:hidden block cursor-pointer hover:text-red-200">
                  <FaRegCirclePlay size={50}/>
              </motion.span>
              <h2 className="md:text-4xl text-xl"> Play Root</h2>
            </div>

            {/* play numbered chord of key */}
            <div className="flex items-center gap-3">
              <motion.span onClick={() => handleClick(chordName as string)} whileHover={{ scale: 1.2 }} className="md:block hidden cursor-pointer hover:text-slate-200">
                  <FaRegCirclePlay size={70}/>
              </motion.span>


              <motion.span whileHover={{ scale: 1.2 }} className="md:hidden block cursor-pointer hover:text-slate-200">
                  <FaRegCirclePlay size={50}/>
              </motion.span>
              <h2 className="md:text-4xl text-xl">Play note</h2>
            </div>
        </div>
    )
  }


export const Question = () => {
  const { chordQuestion } = useChordQuestion()

  return(

    chordQuestion ?

    <h2 className="md:text-5xl text-3xl md:mt-3 md:py-5 py-2 text-center font-semibold">What number is this chord in the key of 
      <span className="text-red-300"> { chordQuestion?.keyName } </span>
    </h2>

    :

    <h2 className="md:text-5xl text-3xl md:mt-3 md:py-5 py-2 text-center font-semibold"> 
      Generating question... 
    </h2>
    )
  
}

