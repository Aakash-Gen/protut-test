import { Link } from "react-scroll"
import { useState } from "react"
import { DiProlog } from "react-icons/di";


function Navbar() {
    const [dropdown,setDropdown] = useState(false);
    const HandleDropdown =()=>{
        setDropdown(!dropdown);
    }
  return (
    <div className=' bg-black flex justify-between items-center p-4 fixed top-0 w-full h-14 z-10 pl-6'>
        <Link to="dashboard" spy={true} smooth={true} duration={500} offset={-70} className="flex items-center gap-1 hover:cursor-pointer">
            <h1 className="text-white font-bold text-lg ">Protut</h1>
            <DiProlog size={28} color="white"/>
        </Link>
        <Link to="home" spy={true} smooth={true} duration={500} offset={-70} className='hover:cursor-pointer text-white' >Home</Link>
        <Link to="footer" spy={true} smooth={true} duration={500} offset={-70} className='hover:cursor-pointer text-white'>About</Link>
        <div className="relative flex flex-col items-center">
            <div className="text-white hover:cursor-pointer" onClick={HandleDropdown}>
                Products
            </div>
            {dropdown && <Dropdown/>}
        </div>
        <button className="w-24 py-1.5 px-6 text-md flex items-center gap-2 justify-center font-medium shadow-xl rounded-lg bg-blue-600 text-white hover:bg-blue-900">
            Signup
        </button>
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