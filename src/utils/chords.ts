const musicNotesIncludingSharpsFlats: string[] = [
    'C',
    'C#',
    'Db',
    'D',
    'D#',
    'Eb',
    'E',
    'F',
    'F#',
    'Gb',
    'G',
    'G#',
    'Ab',
    'A',
    'A#',
    'Bb',
    'B'
  ];


  const musicNotesNoSharpsFlats: string[] = [
    'C',
    'D',
    'E',
    'F',
    'G',
    'A',
    'B'
  ]; 

export type Chord = {
    numberName: number;
    chordName: string;
};

export type ChordMap = {
    [chordKey: string]: {
        [numberKey: number]: Chord;
    };
};
  const allChordNumbers: ChordMap = {
    'C': {
        1: { 'numberName': 1, 'chordName': 'C' },
        2: { 'numberName': 2, 'chordName': 'D' },
        3: { 'numberName': 3, 'chordName': 'E' },
        4: { 'numberName': 4, 'chordName': 'F' },
        5: { 'numberName': 5, 'chordName': 'G' },
        6: { 'numberName': 6, 'chordName': 'A' },
        7: { 'numberName': 7, 'chordName': 'B' }
    },
    
    'D': {
        1: { 'numberName': 1, 'chordName': 'D' },
        2: { 'numberName': 2, 'chordName': 'E' },
        3: { 'numberName': 3, 'chordName': 'F#' },
        4: { 'numberName': 4, 'chordName': 'G' },
        5: { 'numberName': 5, 'chordName': 'A' },
        6: { 'numberName': 6, 'chordName': 'B' },
        7: { 'numberName': 7, 'chordName': 'C#' }
    },

    'E': {
        1: { 'numberName': 1, 'chordName': 'E' },
        2: { 'numberName': 2, 'chordName': 'F#' },
        3: { 'numberName': 3, 'chordName': 'G#' },
        4: { 'numberName': 4, 'chordName': 'A' },
        5: { 'numberName': 5, 'chordName': 'B' },
        6: { 'numberName': 6, 'chordName': 'C#' },
        7: { 'numberName': 7, 'chordName': 'D#' }
    },

    'F': {
        1: { 'numberName': 1, 'chordName': 'F' },
        2: { 'numberName': 2, 'chordName': 'G' },
        3: { 'numberName': 3, 'chordName': 'A' },
        4: { 'numberName': 4, 'chordName': 'Bb' },
        5: { 'numberName': 5, 'chordName': 'C' },
        6: { 'numberName': 6, 'chordName': 'D' },
        7: { 'numberName': 7, 'chordName': 'E' }
    },

    'G': {
        1: { 'numberName': 1, 'chordName': 'G' },
        2: { 'numberName': 2, 'chordName': 'A' },
        3: { 'numberName': 3, 'chordName': 'B' },
        4: { 'numberName': 4, 'chordName': 'C' },
        5: { 'numberName': 5, 'chordName': 'D' },
        6: { 'numberName': 6, 'chordName': 'E' },
        7: { 'numberName': 7, 'chordName': 'F#' }
    },
    
    'A': {
        1: { 'numberName': 1, 'chordName': 'A' },
        2: { 'numberName': 2, 'chordName': 'B' },
        3: { 'numberName': 3, 'chordName': 'C#' },
        4: { 'numberName': 4, 'chordName': 'D' },
        5: { 'numberName': 5, 'chordName': 'E' },
        6: { 'numberName': 6, 'chordName': 'F#' },
        7: { 'numberName': 7, 'chordName': 'G#' }
    },

    'B': {
        1: { 'numberName': 1, 'chordName': 'B' },
        2: { 'numberName': 2, 'chordName': 'C#' },
        3: { 'numberName': 3, 'chordName': 'D#' },
        4: { 'numberName': 4, 'chordName': 'E' },
        5: { 'numberName': 5, 'chordName': 'F#' },
        6: { 'numberName': 6, 'chordName': 'G#' },
        7: { 'numberName': 7, 'chordName': 'A#' }
    },
}




/**
 * 
 * @returns a random music key, a random chord object from that key 
 * which contains the 
 * "number of the chord" in the key and the 
 * "name of the chord itself"
 */
export const pickRandomChord = () => {
    const randomMusicKeyIndex = Math.floor(Math.random() * musicNotesNoSharpsFlats.length)
    const randomChordIndex = Math.floor(Math.random() * 7) + 1; // pick random number from 1 to 7

    const keyName = musicNotesNoSharpsFlats[randomMusicKeyIndex] // pick random musical key
    
    // pick random chord from key
    const pickedChord = allChordNumbers[keyName][randomChordIndex]

    return { keyName, pickedChord }
}




/**
 * 
 * @param keyName 
 * @param userChosenChordNumber 
 * @param correctChordName 
 * @returns true if the user provided chord is the same as the correct one
 */
export const checkCorrectChord = (keyName: string, userChosenChordNumber: number, correctChordName: string) => {
    const chord = allChordNumbers[keyName][userChosenChordNumber]
    if (chord?.chordName === correctChordName) {
        return true
    }

    return false
}