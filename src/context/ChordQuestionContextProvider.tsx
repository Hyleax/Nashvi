"use client"
import { createContext, useEffect, useState } from "react"
import { Chord, pickRandomChord } from "@/chords";

type ChordQuestionContext ={
    chordQuestion: {
        keyName: string;
        pickedChord: Chord;
    } | null
    setChordQuestion: React.Dispatch<React.SetStateAction<{
        keyName: string;
        pickedChord: Chord;
    } | null>> 
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

    useEffect(() => {
        setChordQuestion(pickRandomChord())
    }, [])

    return(
        <ChordQuestionContext.Provider value={{ chordQuestion, setChordQuestion }}>
            {children}
        </ChordQuestionContext.Provider>
    )
}