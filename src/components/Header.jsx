// import React from 'react'
import { IoBookSharp } from "react-icons/io5";
import { FaRegBell,  } from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlineWbSunny } from "react-icons/md";

const Header = () => {
  return (
    <div className=" ml-10">
      <nav className=" container flex justify-between px-20 space-x-10 py-4">
        <a href="#" className=" flex gap-2 items-center">
          <IoBookSharp className=" w-8 h-8 text-white"/>
          <span className=" font-extrabold uppercase text-white "> Book Rental</span>
        </a>
        <ul className=" flex items-center space-x-5 text-teal-100">
          <li>
            <a href="" className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
            <FaRegBell/>
            </a>
          </li>
          <li>
            <a href="" className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
            <MdOutlineWbSunny/>
            </a>
          </li>
          <li>
            <a href="" className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
            <MdOutlineShoppingCart/>
            </a>
          </li>
        </ul>
      
      </nav>
      </div>
  )
}

export default Header;