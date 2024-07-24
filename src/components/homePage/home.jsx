import React from 'react'
import Navbar from '../navbar/navbar'
import './home.css'
import StudentCard from '../studentCard/studentCard';
// name,age,gender,branch,status,dsaScore
import { studentsData } from '../../dataFiles/studentsData.js';

function Home() {
  return (
    <div className="w-screen bg-[#050a44]">
   
    <div id='main'className='flex w-screen h-screen bg-[#f8eded] text-[#0a21c0] text-3xl'>
        <div id="left-div">

        </div>
        <div id="middle-div" className=''>
          <div id="content">
            <h2 className='overflow-hidden flex items-center justify-center'>Welcome to IIT Bhilai </h2><h2 className='overflow-hidden flex items-center justify-center'>Placement Portal.</h2> 
            <h3 className='overflow-hidden flex items-center justify-center'>Streamlining interviews and placement process. </h3>  
          </div>
        </div>  
        <div id="right-div">

        </div>
    </div>
     <div  className='w-screen min-height-screen text-xl'>
        <StudentCard students={studentsData}/>
     </div>
    </div>
  )
}

export default Home
