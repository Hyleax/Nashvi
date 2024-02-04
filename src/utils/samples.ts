"use client"

import * as Tone from "tone"


export const toneObject = Tone

// JS object to map note to MP3 file
const notes =  {
    "C3": "C3.mp3",
    "C#3": "Cs3.mp3",
    "Db3": "Cs3.mp3",
    "D3": "D3.mp3",
    "D#3": "Ds3.mp3",
    "Eb3": "Ds3.mp3",
    "E3": "E3.mp3",
    "F3": "F3.mp3",
    "F#3": "Fs3.mp3",
    "Gb3": "Fs3.mp3",
    "G3": "G3.mp3",
    "G#3": "Gs3.mp3",
    "Ab3": "Gs3.mp3",
    "A3": "A3.mp3",
    "Bb3": "As3.mp3",
    "B3": "B3.mp3",
}


// export piano instrument
export const piano = new toneObject.Sampler({
    urls: notes,
    release: 1,
    baseUrl: '/samples/piano/'
}).toDestination()



export const playSample = (chord: string) => {
    const now = toneObject.now()
    piano.triggerAttackRelease(chord, "1n", now)
}