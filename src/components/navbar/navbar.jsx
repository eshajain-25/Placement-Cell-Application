import React from 'react'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
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
                
                    <CustomLink to="/" className="block text-lg sm:text-md mt-4 lg:inline-block lg:mt-0 text-[#6EACDA] hover:text-white mr-4">
                    Home
                    </CustomLink>
                    
                    <CustomLink to="/interview" className="block text-lg mt-4 sm:text-md lg:inline-block lg:mt-0 text-[#6EACDA] hover:text-white mr-4">
                    Interviews
                    </CustomLink>
                    <CustomLink to="/job-portal" className="block text-lg mt-4 sm:text-md lg:inline-block lg:mt-0 text-[#6EACDA] hover:text-white mr-4">
                    Job Portal
                    </CustomLink>
                    <CustomLink to="/profile" className="block text-lg mt-4 sm:text-md lg:inline-block lg:mt-0 text-[#6EACDA] hover:text-white">
                    Profile
                    </CustomLink>
                   
                
                    <div className='flex  items-center justify-between'>
                    <Link to="/Download" className="inline-block text-lg sm:text-md  mx-2 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#6EACDA] hover:bg-white mt-4 lg:mt-0">Download Report</Link>
                    </div>
                </div>

                <div className='flex  items-center justify-between'>
                    <Link to="/logout" className="inline-block text-lg sm:text-md px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#6EACDA] hover:bg-white mt-4 lg:mt-0">Logout</Link>
                </div>
                
            </div>
        </nav>    
    </div>
  )
}

export default Navbar

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true});
    return (
        <h3 className={isActive ? "active":""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </h3>
    );
}