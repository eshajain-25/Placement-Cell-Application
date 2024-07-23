import React from 'react'
import './studentCard.css'

//TODO: Make a different file containing list of interviews
const interviews = [
    { company: 'Facebook', role: 'Software Engineer', date: '2023-04-01', time: '10:00 AM', result: 'Pending' },
    { company: 'Google', role: 'Product Manager', date: '2023-04-03', time: '1:00 PM', result: 'Pending' },
    { company: 'Facebook', role: 'Software Engineer', date: '2023-04-01', time: '10:00 AM', result: 'Pending' },
    { company: 'Google', role: 'Product Manager', date: '2023-04-03', time: '1:00 PM', result: 'Pending' },
    // Add more interviews as needed
  ];

  const Card = ({name,age,gender,branch,status,dsaScore}) => {
    return (
    <div className="bg-[#F8EDED] shadow-md rounded-lg p-4">
        <div id="upper-div">
            <h2 className="text-gray-700 text-xl">Name: {name}</h2>
            <h2 className="text-gray-700">Age: {age}</h2>
            <h2 className="text-gray-700">Gender: {gender}</h2>
            <h2 className="text-gray-700">Branch: {branch}</h2>
            <h2 className="text-gray-700">Status: {status}</h2>
            <h2 className="text-gray-700">DSA score: {dsaScore}</h2>
        </div>
        <div id="middlediv"  className="mt-2 mb-2 border-t-2 border-b-2 border-[#141619] py-2 font-bold text-xl flex justify-center">Interviews Scheduled</div>
        <div id="bottomdiv" >
            <table className="w-full">
                <tr>
                    <th className="text-left p-2 bg-[#141619] text-white">Company</th>
                    <th className="text-left p-2 bg-[#141619] text-white">Role</th>
                    <th className="text-left p-2 bg-[#141619] text-white">Date</th>
                    <th className="text-left p-2 bg-[#141619] text-white">Time</th>
                    <th className="text-left p-2 bg-[#141619] text-white">Result</th>
                </tr>
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
    <div className="container mx-auto p-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((student, index) => (
          <Card key={index} {...student} />
        ))}
      </div>
    </div>
  )
}



export default StudentCard;