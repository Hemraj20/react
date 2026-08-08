
import React from 'react'
import logo from "../assets/logo.jpeg";
import menu from '../Data/menulinks';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div>
      <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
     
      
        <div className="flex items-center gap-3">
          {/* <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-contain"
          /> */}
        <Link to="/">
            <img src={logo} alt="Logo" className='"h-10 w-10' />
            </Link>
          <h1 className="text-2xl font-bold text-blue-600">
         HB Pure Luxe Cosmetics
          </h1>
        
        </div>

        {/* Navigation */}
        <nav>
          <ul className='flex space-x-6 font-semibold'>
           {menu.map((menu) =>(
           <li>
            <Link to={menu.link} className='text-blue-700'>
              {menu.title}
            </Link>
           </li>
          ))} 
          </ul>
        </nav>

        {/* Button */}
        <Link to="/logging">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 duration-300">
          Login
        </button>
        </Link>

      </div>
    </header>
    </div>
  )
}

export default Header
