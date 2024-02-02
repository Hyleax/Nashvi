"use client"
import { createContext, useEffect, useState } from "react"
import { Chord, pickRandomChord } from "@/chords";

type ChordQuestionContext ={
    chordQuestion: {
        keyName: string;
        pickedChord: Chord;
    } | null
    getNewChord: () => void
    isAnswered: boolean
    revealAnswer: () => Promise<void>
}
export const ChordQuestionContext = createContext<ChordQuestionContext>({} as ChordQuestionContext)

type ChordQuestionContextProvider = {
    children: React.ReactNode
}
export const ChordQuestionContextProvider = ({ children }: ChordQuestionContextProvider ) => {

    
    const [chordQuestion, setChordQuestion] = useState<{
        keyName: string;
        pickedChord: Chord;
    } | null>
    (null)

    const [isAnswered, setIsAnswered] = useState(false)

    useEffect(() => {
        setChordQuestion(pickRandomChord())
    }, [])


    const getNewChord = () => {
        setChordQuestion(pickRandomChord())
    }

    const revealAnswer = async() => {
        setIsAnswered(true)
        await new Promise(resolve => setTimeout(resolve, 4000))
        setIsAnswered(false)
    }

    return(
        <ChordQuestionContext.Provider value={{ chordQuestion, getNewChord, isAnswered, revealAnswer}}>
            {children}
        </ChordQuestionContext.Provider>
    )
}