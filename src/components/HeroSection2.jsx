import { FaArrowRightLong } from "react-icons/fa6";

function HeroSection2() {
  return (
    <div className="pb-8 bg-gray-100 w-full  flex items-center justify-center">
        <div className="bg-white h-[70vh] w-[150vh] rounded-lg shadow-xl flex flex-col items-center">
                <div className="flex w-[70vh] h-16 mt-4">
                    <button className="w-36 py-2.5 px-5 mt-4 text-sm font-medium  rounded-s-xl border shadow-xl focus:z-10 focus:ring-4 focus:ring-gray-100 bg-black text-white border-gray-600  hover:bg-gray-700">Tab1</button>
                    <button className="w-36 py-2.5 px-5 mt-4 text-sm font-medium  border  focus:z-10 shadow-xl focus:ring-4 focus:ring-gray-100 bg-black text-white border-gray-600  hover:bg-gray-700">Tab2</button>
                    <button className="w-36 py-2.5 px-5 mt-4 text-sm font-medium  border  focus:z-10 shadow-xl focus:ring-4 focus:ring-gray-100 bg-black text-white border-gray-600  hover:bg-gray-700">Tab3</button>
                    <button className="w-36 py-2.5 px-5 mt-4 text-sm font-medium  rounded-e-xl border shadow-xl focus:z-10 focus:ring-4 focus:ring-gray-100 bg-black text-white border-gray-600  hover:bg-gray-700">Tab4</button>
                </div>
                <div className="flex justify-evenly pt-16 w-full items-center">
                    <div className="bg-green-500 w-96 h-72"></div>
                    <button className="w-48 h-12 py-2.5 px-8 text-md flex items-center gap-2 justify-center font-medium shadow-xl rounded-lg border border-gray-300 bg-blue-600 text-white hover:bg-blue-900">
                        Get started
                        <FaArrowRightLong/>
                    </button>
                </div>
        </div>
    </div>
  )
}

export default HeroSection2