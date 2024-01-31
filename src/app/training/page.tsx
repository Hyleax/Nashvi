import { AnswerOptions } from "@/components/AnswerOption";
import { AudioPlayer } from "@/components/AudioPlayer";
import { l_spartan } from "@/fonts";

const chordNumbers = [1,2,3,4,5,6,7]

export default function TrainingPage() {
  return (
    <main className={`flex flex-1 items-center justify-center ${l_spartan.className}`}>
      <div className="md:h-[65%] md:w-[55%]  flex flex-col">
        
        <Question chordKey={'C'}/>

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
    </main>
  );
}

 

const Question = ({ chordKey }: { chordKey: string }) => {
  return <h2 className="md:text-5xl text-3xl md:mt-3 md:py-5 py-2 text-center font-semibold">What number is this chord in the key of <span className="text-red-300">{chordKey} major</span></h2>
}


