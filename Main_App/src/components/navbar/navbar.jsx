import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div>
        <nav className="fixed top-0 w-full flex items-center justify-between flex-wrap bg-[#141619] p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold overflow-hidden text-3xl tracking-tight">Tailwind CSS</span>
            </div>
            <div className="flex w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                
                <div className="flex justify-end text-sm items-center lg:flex-grow">
                    <a href="#responsive-header" className="block text-lg mt-4 lg:inline-block lg:mt-0 text-[#6EACDA] hover:text-white mr-4">
                    Home
                    </a>
                    <a href="#responsive-header" className="block text-lg mt-4 lg:inline-block lg:mt-0 text-[#6EACDA] hover:text-white mr-4">
                    Interviews
                    </a>
                    <a href="#responsive-header" className="block text-lg mt-4 lg:inline-block lg:mt-0 text-[#6EACDA] hover:text-white mr-4">
                    Job Portal
                    </a>
                    <a href="#responsive-header" className="block text-lg mt-4 lg:inline-block lg:mt-0 text-[#6EACDA] hover:text-white">
                    Profile
                    </a>
                    <div className='flex  items-center justify-between'>
                    <a href="#" className="inline-block text-lg mx-2 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#6EACDA] hover:bg-white mt-4 lg:mt-0">Download Report</a>
                    </div>
                </div>

                <div className='flex  items-center justify-between'>
                    <a href="#" className="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#6EACDA] hover:bg-white mt-4 lg:mt-0">Logout</a>
                </div>
                
            </div>
        </nav>    
    </div>
  )
}

export default Navbar