import { useState } from "react"
import Navbar from "./components/Navbar"

const menuList = ["Home", "Top", "Profile", "Blog", "About",]
const App = ()=> {
  const [value, setValue] = useState(10)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const toggleMenu = ()=>{
    setMenuOpen(!isMenuOpen)

  }
  return (
    <fregment className="h-[100vh] w-[100%] flex items-center justify-center flex-col gap-1">
      <div>App value {value}</div>
      <button onClick={toggleMenu} className="bg-blue-500 text-white px-4 py-2 rounded transition-all duration-300 ease-linear hover:bg-blue-700">Open Menu</button>
      <div className="transition all duration-1000 ease-in">
      {isMenuOpen ? <Navbar menuname={menuList}/> : <div>There Is Some Menu</div>}
      </div>
    </fregment>
  )
}

export default App