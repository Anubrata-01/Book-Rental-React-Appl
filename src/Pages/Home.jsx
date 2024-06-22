import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <div className="w-full h-screen border-2 bg-black relative">
      <Header/>
      <main className="">
      <Sidebar/>
      <Outlet/>
      </main>
      
    </div>
  )
}

export default Home
