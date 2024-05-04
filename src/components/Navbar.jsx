import { Link } from "react-scroll"

function Navbar() {
  return (
    <div className='bg-[#0A0A0A] flex justify-between items-center p-4 fixed top-0 w-full h-14 z-10 pl-6'>
        <div className="flex items-center">
            <h1 className="text-white font-bold text-lg ">Protut</h1>
            <img className="h-12 w-12" src="/pikaso_texttoimage_give-me-a-logo-for-a-site-called-protut-give-a-sim-removebg-preview.png" alt="" />
        </div>
        <Link to="collection" spy={true} smooth={true} duration={500} offset={-70} className='hover:cursor-pointer text-white' >Home</Link>
        <Link to="compare" spy={true} smooth={true} duration={500} offset={-70} className='hover:cursor-pointer text-white'>About</Link>
        <Link to="about-us" spy={true} smooth={true} duration={500} offset={-70} className='hover:cursor-pointer text-white'>Products</Link>
        <div className="text-white mr-5 hover:cursor-pointer">
            Signup
        </div>
    </div>
  )
}

export default Navbar