import { FaArrowRightLong } from "react-icons/fa6";

function Dashboard() {
  return (
    <div id="dashboard" className="bg-gray-100 flex min-h-screen justify-evenly items-center pt-12">
        <div>
            <h1 className="text-black text-4xl font-bold">Welcome to Protut</h1>
            <p className="text-black text-lg">Protut is a one-stop platform to search and buy best products in the market.</p>
            <div className="flex gap-3">
                <Button user="1"/>
                <Button user="2"/>
            </div>
        </div>
        <img className="rounded-lg shadow-md h-96" src="https://img.freepik.com/free-photo/3d-computer-workstation-with-desk-room_23-2150714135.jpg?t=st=1714852702~exp=1714856302~hmac=09a4ec553c4f5afd7302a54cf41af431a38ddff4b5431d2012b026b4d0d9edb6&w=740" alt="" />
        {/* <img className="h-[100vh] w-full object-cover opacity-70" src="/dashboard.jpg" alt="" /> */}
    </div>
  )
}

const Button = (props) => {
    return(
        <div className="w-44 py-2 px-8 text-md flex flex-col mt-8 justify-center font-medium shadow-xl rounded-lg bg-blue-600 text-white hover:bg-blue-900 hover:cursor-pointer">
            <h2 className="text-md">Continue</h2>
            <div className="flex items-center gap-1">
                <p className="text-sm"> with user {props.user}</p>
                <FaArrowRightLong/>
            </div>
        </div>
    )
}

export default Dashboard