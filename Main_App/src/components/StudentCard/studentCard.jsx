import React from 'react'

  const Card = ({name,age,gender,branch,status,dsaScore}) => {
    return (
    <div className="bg-white shadow-md rounded-lg p-4">
        <div id="upper-div">
            <h2 className="text-gray-700 text-xl">Name: {name}</h2>
            <h2 className="text-gray-700">Age: {age}</h2>
            <h2 className="text-gray-700">Gender: {gender}</h2>
            <h2 className="text-gray-700">Branch: {branch}</h2>
            <h2 className="text-gray-700">Status: {status}</h2>
            <h2 className="text-gray-700">DSA score: {dsaScore}</h2>
        </div>
        <div id="middlediv">Interviews Scheduled</div>
        <div id="bottomdiv">
            <table>
                <tr>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Result</th>
                </tr>
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