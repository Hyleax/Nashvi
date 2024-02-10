"use client"
import { createContext, useEffect, useRef, useState } from "react"
import { Chord, pickRandomChord } from "@/utils/chords";

type ChordQuestionContext ={
    chordQuestion: {
        keyName: string;
        pickedChord: Chord;
    } | null
    getNewChord: () => void
    isAnswered: boolean
    revealAnswer: () => Promise<void>
    incrementScore: () => void
    resetCompetitiveGame: () => void
    currentScore: number
    globalCompetitiveCountdown: number
    startCompetitiveGame: string
    startGlobalTimer: () => void
}
export const ChordQuestionContext = createContext<ChordQuestionContext>({} as ChordQuestionContext)

type ChordQuestionContextProvider = {
    children: React.ReactNode
}
export const ChordQuestionContextProvider = ({ children }: ChordQuestionContextProvider ) => {
    const COUNTDOWN_VALUE = 200

    /** STATE VARIABLES */
    const [chordQuestion, setChordQuestion] = useState<{
        keyName: string;
        pickedChord: Chord;
    } | null>
    (null)
    const [isAnswered, setIsAnswered] = useState(false)
    const [currentScore, setCurrentScore] = useState(0)
    const [globalCompetitiveCountdown, setGlobalCompetitiveCountdown] = useState(COUNTDOWN_VALUE)
    const [startCompetitiveGame, setStartCompetitiveGame] = useState('')
    const intervalID = useRef({} as NodeJS.Timeout)
    /** */

    useEffect(() => {
        if (startCompetitiveGame === 'start') {
            intervalID.current = setInterval(() => {
                setGlobalCompetitiveCountdown(prev => prev - 1)
            }, 1000)
        }

        if (startCompetitiveGame === 'end') {
            return () => clearInterval(intervalID.current)
        }
        
        
    }, [startCompetitiveGame])


    useEffect(() => {
        if (globalCompetitiveCountdown <= 0) {
            setStartCompetitiveGame('end')
        }
    }, [globalCompetitiveCountdown])


    useEffect(() => {
        setChordQuestion(pickRandomChord())
    }, [])


    /**
     * get a new chord
     */
    const getNewChord = () => {
        setChordQuestion(pickRandomChord())
    }

    /**
     * reveal chord answer
     */
    const revealAnswer = async() => {
        setIsAnswered(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsAnswered(false)
    }

    /**
     * increment score
     */
    const incrementScore = () => {
        setCurrentScore(prev => prev + 1)
    }


    /**
     * resetScore
     */
    const resetCompetitiveGame = async() => {
        setCurrentScore(0)
        setGlobalCompetitiveCountdown(COUNTDOWN_VALUE)
    }

    const startGlobalTimer = () => {
        setStartCompetitiveGame('start')
    }


    return(
        <ChordQuestionContext.Provider 
        value={{ 
            chordQuestion, getNewChord,
             isAnswered, revealAnswer,
             incrementScore, resetCompetitiveGame,
             currentScore, globalCompetitiveCountdown,
             startCompetitiveGame, startGlobalTimer,
            }}>
            {children}
        </ChordQuestionContext.Provider>
    )
}