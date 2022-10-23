import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className='w-full bg-gray-900 h-full max-h-full max-w-full fixed '>
      <Link to="/" className='z-50 absolute top-3 left-3'>
    <button className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Home
  </span>
</button>
</Link>
     
      <Outlet />
    </div>
  )
};

export default Layout