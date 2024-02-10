"use client"
import { AnswerOptions, AudioPlayer, Question } from '@/components/TrainingPageComponents'
import { ChordQuestionContextProvider } from '@/context/ChordQuestionContextProvider'
import { l_spartan } from '@/utils/fonts'
import React, { useEffect, useState } from 'react'
import { InitialCountdown, CompetitivePageAboveSection } from './client-components'
import useChordQuestion from '@/hooks/useChordQuestion'

const chordNumbers = [1,2,3,4,5,6,7]

const SingleplayerCompetitivePage = () => {
  const [showIntialTimer, setShowIntialTimer] = useState(true)

  return (
    <ChordQuestionContextProvider>
      <main className={`flex flex-1 items-center justify-center ${l_spartan.className}`}>
      
        <div className="md:h-[65%] md:w-[55%]  flex flex-col ">
          {
            !showIntialTimer ?

            <CompetitivePageMainContent/>
            :
            <InitialCountdown  setShowIntialTimer={setShowIntialTimer}/>
          }
        </div>
      </main>
    </ChordQuestionContextProvider>
  )
}


const CompetitivePageMainContent = () => {
  const { startCompetitiveGame, currentScore, startGlobalTimer, resetCompetitiveGame } =  useChordQuestion()

  useEffect(() => {
    startGlobalTimer()
}, [])

  if (startCompetitiveGame === 'start') {
    return(
      <>
        <>
          <CompetitivePageAboveSection/>
            <Question />
              <div className="flex md:flex-row flex-col md:mt-10 gap-5 px-3">

                {/* play audio here */}
                <div className="flex flex-col">
                  <AudioPlayer/>
                </div>

                {/* options are here */}
                <div className="flex-1 flex flex-col justify-between gap-3 mb-2">
                  {
                    chordNumbers.map((c, index) => <AnswerOptions key={c} chordNumber={c} optionNum={index}/>)
                  }

                </div>

              </div>
        </>
      </>
    )
  }

  else if (startCompetitiveGame === 'end') {
    return(
      <div className="flex flex-col gap-20 items-center">
        <div className="flex items-center justify-center gap-3">
          <span className='text-5xl'>Final Score:</span>
          <span className='text-6xl text-red-300'>{ currentScore }</span>
        </div>

        <button 
          onClick={() => {
            resetCompetitiveGame()
            startGlobalTimer()
          }}
          className='w-[50%] bg-red-300 hover:bg-red-400 p-3 
            rounded-lg shadow-md text-3xl'>
              Play again
        </button>
      </div>
    )
  }
} 

export default SingleplayerCompetitivePage