import { Link } from "react-scroll"
import { useState } from "react"

function Navbar() {
    const [dropdown,setDropdown] = useState(false);
    const HandleDropdown =()=>{
        setDropdown(!dropdown);
    }
  return (
    <div className='bg-[#0A0A0A] flex justify-between items-center p-4 fixed top-0 w-full h-14 z-10 pl-6'>
        <div className="flex items-center">
            <h1 className="text-white font-bold text-lg ">Protut</h1>
            <img className="h-12 w-12" src="/pikaso_texttoimage_give-me-a-logo-for-a-site-called-protut-give-a-sim-removebg-preview.png" alt="" />
        </div>
        <Link to="collection" spy={true} smooth={true} duration={500} offset={-70} className='hover:cursor-pointer text-white' >Home</Link>
        <Link to="compare" spy={true} smooth={true} duration={500} offset={-70} className='hover:cursor-pointer text-white'>About</Link>
        <div className="relative">
            <div className="text-white hover:cursor-pointer" onClick={HandleDropdown}>
                Products
            </div>
            {dropdown && <Dropdown/>}
        </div>
        <div className="text-white mr-5 hover:cursor-pointer">
            Signup
        </div>
    </div>
  )
}

const Dropdown =()=>{
    return(
        <div className="absolute top-full bg-white border rounded shadow-md mt-6 w-36 p-4 gap-2">
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
            <p className="text-sm font-medium text-gray-400 mb-2">{props.descriptiion} </p>
        </div>
    )
}

export default Navbar