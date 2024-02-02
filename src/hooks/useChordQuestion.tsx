"use client"

import { useContext } from "react"
import { ChordQuestionContext } from "@/context/ChordQuestionContextProvider"

export default function useChordQuestion() {
    return useContext(ChordQuestionContext) 
}