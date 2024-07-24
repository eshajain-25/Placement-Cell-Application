import React from 'react'
import './studentCard.css'
import { interviews } from '../../dataFiles/interviewSchedule';
//TODO: Make a different file containing list of interviews


  const Card = ({id,name,age,gender,branch,status,dsaScore}) => {
    return (
    <div id="maindiv" className="flex-row bg-[#F8EDED] shadow-md rounded-lg p-4">
        <div id="upper-div">
            <h2 className="text-gray-700">ID: {id}</h2>
            <h2 className="text-gray-700 text-xl">Name: {name}</h2>
            <h2 className="text-gray-700">Age: {age}</h2>
            <h2 className="text-gray-700">Gender: {gender}</h2>
            <h2 className="text-gray-700">Branch: {branch}</h2>
            <h2 className="text-gray-700">Status: {status}</h2>
            <h2 className="text-gray-700">DSA score: {dsaScore}</h2>
        </div>
        <div id="middlediv"  className="mt-2 mb-2 border-t-2 border-b-2 border-[#141619] py-2 font-bold text-xl flex justify-center">Interviews Scheduled</div>
        <div id="bottomdiv " className="overflow-x-auto">
            <table id="interviewTable" className=' max-w-full table-auto'>
              <thead>
                <tr>
                    <th scope="col" className=" text-left p-2 bg-[#141619] text-white">Company</th>
                    <th scope="col" className=" text-left p-2 bg-[#141619] text-white">Role</th>
                    <th scope="col" className=" text-left p-2 bg-[#141619] text-white">Date</th>
                    <th scope="col" className=" text-left p-2 bg-[#141619] text-white">Time</th>
                    <th scope="col" className=" text-left p-2 bg-[#141619] text-white">Result</th>
                </tr>
              </thead>
                {interviews.map((interview, index) => (
                <tr key={index}>
                    <td className="p-2 border">{interview.company}</td>
                    <td className="p-2 border">{interview.role}</td>
                    <td className="p-2 border">{interview.date}</td>
                    <td className="p-2 border">{interview.time}</td>
                    <td className="p-2 border">{interview.result}</td>
                </tr>
                ))}
            </table>
        </div>
    </div>
    );
  };

function StudentCard({students}) {
  return (
    <div className="container mx-auto p-4 ">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {students.map((student, index) => (
          <Card key={index} {...student} />
        ))}
      </div>
    </div>
  )
}



export default StudentCard;