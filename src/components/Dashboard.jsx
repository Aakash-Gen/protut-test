import { FaArrowRightLong } from "react-icons/fa6";

function Dashboard() {
  return (
    <div id="dashboard" className="bg-gray-100 flex flex-col md:flex-row items-center justify-evenly min-h-screen pt-12 px-4 md:px-0">
        <div className="md:max-w-md">
            <h1 className="text-black text-4xl font-bold mb-4 text-center md:text-left">Welcome to Protut</h1>
            <p className="text-black text-lg mb-6 text-center md:text-left">Protut is a one-stop platform to search and buy the best products in the market.</p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start md:gap-3 gap-0.5 mb-4">
                <Button user="1"/>
                <Button user="2"/>
            </div>
        </div>
        <img className="rounded-lg shadow-md md:h-96 md:ml-8" src="https://img.freepik.com/free-photo/3d-computer-workstation-with-desk-room_23-2150714135.jpg?t=st=1714852702~exp=1714856302~hmac=09a4ec553c4f5afd7302a54cf41af431a38ddff4b5431d2012b026b4d0d9edb6&w=740" alt="" />
        {/* <img className="h-[100vh] w-full object-cover opacity-70" src="/dashboard.jpg" alt="" /> */}
    </div>
  )
}

const Button = (props) => {
    return(
        <div className="w-full md:w-auto py-2 px-8 text-md flex flex-col mt-8 justify-center font-medium shadow-xl rounded-lg bg-blue-600 text-white hover:bg-blue-900 hover:cursor-pointer">
            <h2 className="text-md text-center md:text-left">Continue</h2>
            <div className="flex items-center justify-center md:justify-start gap-1">
                <p className="text-sm">with user {props.user}</p>
                <FaArrowRightLong/>
            </div>
        </div>
    )
}

export default Dashboard;
