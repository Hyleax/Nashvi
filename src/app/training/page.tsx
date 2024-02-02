import { AnswerOptions, AudioPlayer, Question } from "@/components/TrainingPageComponents";
import { l_spartan } from "@/fonts";
import { ChordQuestionContextProvider } from "@/context/ChordQuestionContextProvider";

const chordNumbers = [1,2,3,4,5,6,7]

export default function TrainingPage() {
  return (
    <main className={`flex flex-1 items-center justify-center ${l_spartan.className}`}>
      <ChordQuestionContextProvider>
        <div className="md:h-[65%] md:w-[55%]  flex flex-col">
          
          <Question/>

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
        </div>
      </ChordQuestionContextProvider>
    </main>
  );
}

 




