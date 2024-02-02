import TrainBtn from "@/components/TrainBtn";
import YouTubeVideoComponent from "@/components/YoutubeVid";
import { l_spartan } from "@/fonts";


export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="container flex lg:flex-row flex-col gap-10 ">
        <div className="flex-1 flex flex-col justify-between md:gap-0 gap-6 md:px-0 px-2">
          
          <div>
            <h2 className={`${l_spartan.className} font-semibold md:text-7xl text-4xl md:text-left text-center`}>Steadily improve your proficiency with the <span className="text-red-400">Nashville number system</span></h2>
          </div>

          <h2 className={`${l_spartan.className} md:text-3xl text-xl md:text-left text-center`}>based on the popular chord numbering system by Neal and Monty Matthews</h2>

          <div className="lg:text-left text-center">
            <TrainBtn/>
          </div>

        </div>

          <div className="lg:block hidden">
            <YouTubeVideoComponent/>
          </div>
      </div>
    </main>
  );
}