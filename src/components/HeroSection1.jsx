import useVideoPlayer from "./useVideoPlayer";
import { FaArrowRightLong } from "react-icons/fa6";
function HeroSection1() {
    const { playing, handlePlay, handleAutomaticPlay, videoRef, videos } = useVideoPlayer();
  return (
    <div id="home" className="bg-gray-100 w-full md:min-h-screen sm:h-[90vh]">
        <div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-black text-xl font-medium">Here's how it works</h1>
                <div className="flex items-center gap-1">
                    <p className="text-gray-700"> Start a free trial</p>
                    <FaArrowRightLong color="gray-700"/>
                </div>
            </div>
            <div className="grid md:grid-cols-4  mt-12 h-[50vh]">
                <div className="flex md:flex-col md:col-span-1 justify-evenly items-center sm:flex-row pb-2">
                    <Button step="Step 1:" text="lorem ipsum" onClick={()=>handlePlay(1)} />
                    <Button step="Step 2:" text="lorem ipsum" onClick={()=>handlePlay(2)}/>
                </div>
                <div className="flex md:col-span-2 rounded-lg sm:my-2">
                    <video className="rounded-xl shadow-lg" autoPlay controls src={videos[playing-1]} ref={videoRef} onEnded={handleAutomaticPlay}></video>
                </div>
                <div className="flex md:flex-col md:col-span-1 sm:flex-row justify-evenly items-center">
                    <Button step="Step 3:" text="lorem ipsum" onClick={()=>handlePlay(3)} />
                    <Button step="Step 4:" text="lorem ipsum" onClick={()=>handlePlay(4)} />
                </div>
            </div>
        </div>
    </div>
  )
}

const Button =(props)=>{
    return(
        <div onClick={props.onClick} className="w-36 py-2.5 px-5 mt-4 text-sm font-medium  rounded-lg border flex flex-col gap-2 focus:z-10 focus:ring-4 focus:ring-gray-100 bg-black text-white border-gray-600  hover:bg-gray-700 hover:cursor-pointer">
            <h2>{props.step}</h2>
            <p className="text-xs">{props.text}</p>
        </div>
    )
}

export default HeroSection1