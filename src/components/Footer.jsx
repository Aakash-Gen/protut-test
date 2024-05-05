import { DiProlog } from "react-icons/di";

function Footer() {
  return (
    <div id="footer" className="bg-gray-300 grid  md:grid-cols-2 lg:grid-cols-11 p-10 lg:p-20 gap-10">
        <div className="flex flex-col text-black gap-6 text-md lg:col-span-3">
            <div className="text-3xl font-black flex gap-2 items-center">
              Protut
              <DiProlog size={36} color="black"/>
            </div>
            <div>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="flex gap-2">
                <img className="hover:cursor-pointer h-10 w-10 rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/X_icon_2.svg" alt="" />
                <img className="hover:cursor-pointer h-10 w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="" />
                <img className="hover:cursor-pointer h-10 w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" alt="" />
                <img className="hover:cursor-pointer h-10 w-10" src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png" alt="" />
            </div>
        </div>

        <div className="flex flex-col text-black gap-5 text-md lg:col-span-2">
          <div className="text-2xl font-bold">
            Company
          </div>
          <div className="flex flex-col gap-2">
              <Items title="lorem ipsum"/>
              <Items title="lorem ipsum"/>
              <Items title="lorem ipsum"/>
          </div>
        </div>
        <div className="flex flex-col text-black gap-5 text-md lg:col-span-2">
          <div className="text-2xl font-bold">Resources</div>
          <div className="flex flex-col gap-2">
              <Items title="lorem ipsum"/>
              <Items title="lorem ipsum"/>
              <Items title="lorem ipsum"/>
          </div>
        </div>
        <div className="flex flex-col text-black gap-5 text-md lg:col-span-2">
          <div className="text-2xl font-bold">Quick links</div>
          <div className="flex flex-col gap-2">
              <Items title="lorem ipsum"/>
              <Items title="lorem ipsum"/>
              <Items title="lorem ipsum"/>
          </div>
        </div>

        <div className="flex flex-col text-black gap-5 text-md lg:col-span-2">
            <div className="text-2xl font-bold">More</div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center">Subscribe your Email address for latest news & updates.</div>
                <input type="email" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Subscribe</button>
            </div>
        </div>
    </div>
  )
}

const Items = (props) => {
    return (
        <div className="flex items-center gap-2">
            {props.title}
        </div>
    )
}

export default Footer