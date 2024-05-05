import { Link } from "react-scroll"
import { useState } from "react"
import { DiProlog } from "react-icons/di";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";


function Navbar() {
    const [dropdown,setDropdown] = useState(false);
    const [toggleMenu,setToggleMenu] = useState(false);
    const HandleDropdown =()=>{
        setDropdown(!dropdown);
    }
  return (
    <div className=' bg-black flex justify-between items-center p-4 fixed top-0 w-full h-14 z-10 pl-6'>
        <Link to="dashboard" spy={true} smooth={true} duration={500} offset={-70} className="flex items-center gap-1 hover:cursor-pointer">
            <h1 className="text-white font-bold text-lg ">Protut</h1>
            <DiProlog size={28} color="white"/>
        </Link>
        <Link to="home" spy={true} smooth={true} duration={500} offset={-70} className='hover:cursor-pointer sm:flex hidden text-white' >Home</Link>
        <Link to="footer" spy={true} smooth={true} duration={500} offset={-70} className='hover:cursor-pointer sm:flex hidden text-white'>About</Link>
        <div className="relative flex flex-col items-center">
            <div className="text-white hover:cursor-pointer" onClick={HandleDropdown}>
                Products
            </div>
            {dropdown && <Dropdown/>}
        </div>
        <div className="flex gap-1">
            <button className="w-24 py-1.5 px-5 text-md items-center gap-2 justify-center font-medium shadow-xl rounded-lg bg-blue-600 text-white hover:bg-blue-900 sm:flex hidden">
                Login
            </button>
            <button className="w-24 py-1.5 px-5 text-md items-center gap-2 justify-center font-medium shadow-xl rounded-lg bg-blue-600 text-white hover:bg-blue-900 sm:flex hidden">
                Signup
            </button>
        </div>
        {!toggleMenu && (
          <HiMenuAlt3 fontSize={28} className="text-white sm:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white sm:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <div className=' gap-4 fixed -right-2 -top-0 p-3 w-[35vw] h-screen shadow-2xl sm:hidden list-none
          flex flex-col justify-start items-center rounded-md bg-gray-300 bg-glass text-black animate-slide-in'>
            <AiOutlineClose color="black" size={28} className="hover:cursor-pointer" onClick={() => setToggleMenu(false)}/>
            <Link to="home" spy={true} smooth={true} duration={500} offset={-70}  onClick={()=> setToggleMenu(false)} className='hover:cursor-pointer justify-center  mt-2 py-1.5 px-4 w-full text-md font-medium' >Home</Link>
            <Link to="footer" spy={true} smooth={true} duration={500} offset={-70}  onClick={()=> setToggleMenu(false)} className='hover:cursor-pointer justify-center  mt-2 py-1.5 px-4 w-full text-md font-medium'>About</Link>
            <button className="w-24 py-1.5 px-5 text-md flex items-center gap-2 justify-center font-medium shadow-xl rounded-lg bg-blue-600 text-white hover:bg-blue-900">
                Login
            </button>
            <button className="w-24 py-1.5 px-5 text-md flex items-center gap-2 justify-center font-medium shadow-xl rounded-lg bg-blue-600 text-white hover:bg-blue-900">
                Signup
            </button>
          </div>
        )}
    </div>
  )
}

const Dropdown =()=>{
    return(
        <div className="absolute top-full bg-white border rounded shadow-md mt-6 w-44 p-4 flex flex-col items-center">
            <DropdownList title="Product 1" descriptiion="Description"/>
            <DropdownList title="Product 2" descriptiion="Description"/>
            <DropdownList title="Product 3" descriptiion="Description"/>
            <DropdownList title="Product 4" descriptiion="Description"/>
        </div>
    )
}
const DropdownList =(props)=>{
    return(
        <div>
            <p className="text-md font-medium text-gray-800">{props.title}</p>
            <p className="text-xs font-medium text-gray-400 mb-3">{props.descriptiion} </p>
        </div>
    )
}

export default Navbar