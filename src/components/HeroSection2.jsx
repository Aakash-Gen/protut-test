import { FaArrowRightLong } from "react-icons/fa6";
import useVideoPlayer from "./useVideoPlayer";
import { useState,useEffect } from "react";

function HeroSection2() {
    const { playing, handlePlay, handleAutomaticPlay, videoRef, videos } = useVideoPlayer();
    const [activeTab, setActiveTab] = useState(playing);
    const handleActiveTab = (tab) => {
        setActiveTab(tab);
    }
    useEffect(() => {
        setActiveTab(playing);
    }, [playing]);

  return (
    <div className="pb-16 bg-gray-100 w-full flex justify-center">
        <div className="md:bg-white h-[70vh] md:w-[150vh] sm:w-[50vh] rounded-lg shadow-xl flex flex-col items-center">
            <div className="flex flex-wrap md:w-[70vh] justify-center mt-4">
                {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/4">
                        <button
                            onClick={() => {handlePlay(index); handleActiveTab(index)}}
                            className={`w-full py-2.5 px-5 mt-4 text-sm font-medium border focus:z-10 shadow-xl focus:ring-4 focus:ring-gray-100 bg-black text-white border-gray-600 hover:bg-gray-700  ${index === 1 ? 'md:rounded-s-xl' : index === 4 ? 'md:rounded-e-xl' : ''} ${activeTab === index ? 'bg-gray-700' : ''}`}
                        >
                            Tab{index}
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex justify-evenly pt-16 w-full items-center">
                <div className=" md:w-[500px] sm:w-[50px] h-96">
                    <video className="rounded-xl shadow-lg" autoPlay controls src={videos[playing-1]} ref={videoRef} onEnded={handleAutomaticPlay}></video>
                </div>
                <button className="w-48 h-12 py-2.5 px-8 text-md sm:flex hidden items-center gap-2 justify-center font-medium shadow-xl rounded-lg border border-gray-300 bg-blue-600 text-white hover:bg-blue-900">
                    Get started
                    <FaArrowRightLong/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection2