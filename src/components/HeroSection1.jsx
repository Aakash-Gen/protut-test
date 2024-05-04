import { FaArrowRightLong } from "react-icons/fa6";
function HeroSection1() {
  return (
    <div className="bg-gray-100 w-full min-h-screen">
        <div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-black text-xl font-medium">Here's how it works</h1>
                <div className="flex items-center gap-1">
                    <p className="text-gray-700"> Start a free trial</p>
                    <FaArrowRightLong color="gray-700"/>
                </div>
            </div>
            <div className="grid grid-cols-4 mt-12 h-[50vh]">
                <div className="flex flex-col col-span-1 justify-evenly items-center">
                    <Button step="Step 1"/>
                    <Button step="Step 2"/>
                </div>
                <div className="flex col-span-2 bg-green-500">
                    Video
                </div>
                <div className="flex flex-col col-span-1 justify-evenly items-center">
                    <Button step="Step 3"/>
                    <Button step="Step 4"/>
                </div>
            </div>
        </div>
    </div>
  )
}

const Button =(props)=>{
    return(
        <button className="w-36 py-2.5 px-5 mt-4 text-sm font-medium  rounded-lg border  focus:z-10 focus:ring-4 focus:ring-gray-100 bg-black text-white border-gray-600  hover:bg-gray-700">{props.step}</button>
    )
}

export default HeroSection1