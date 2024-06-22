import { FaCalendarAlt, FaFire, FaFolderPlus, FaRegClock, FaRegHeart } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
        <aside className=" w-[300px]">
            <ul className="space-y-2 text-white  pl-28 mt-4">
                <li>
                    <NavLink
                        className={`flex items-center space-x-2 px-3 py-2.5 mt-2 rounded-lg border-2 `}
                        // activeclassname="bg-primary text-black"
                        to="/trending-books"
                    >
                        <FaFire />
                        <span>Trending</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="flex items-center space-x-2 px-3 py-2.5 mt-2 rounded-lg border-2"
                        // activeclassname="bg-primary text-black"
                        to="/new-releases"
                    >
                        <FaFolderPlus />
                        <span>New Releases</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="flex items-center space-x-2 px-3 py-2.5 mt-2 rounded-lg border-2"
                        // activeclassname="bg-primary text-black"
                        to="/upcoming-books"
                    >
                        <FaCalendarAlt />
                        <span>Coming Soon</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="flex items-center space-x-2 px-3 py-2.5 mt-2 rounded-lg border-2"
                         to="/favorite-books"
                        //  activeclassname="bg-primary text-black"
                    >
                       <FaRegHeart />
                        <span>Favourites</span>
                    </NavLink>
                </li>
                <li>
                    <Link
                        className="flex items-center space-x-2 px-3 py-2.5 rounded-lg border-2"
                      
                    >
                       <FaRegClock />
                        <span>Watch Later</span>
                    </Link>
                </li>
            </ul>
        </aside>

    </div>
  )
}

export default Sidebar