import React from 'react'
import './interview.css'
import { students,companies } from '../../dataFiles/interviews';




function Interview() {
  const findStudentById = (id) => {
    return students.find(student => student.id === id);
  };
  return (
    <div className="bg-[#f8eded] min-h-screen p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companies.map((company, index) => (
          <div key={index} className="bg-[rgba(173,216,230,0.2)] backdrop-blur-lg border border-[rgba(255,255,255,0.18)] rounded-lg p-5">
            <h2 className="text-xl font-bold text-gray-900">{company.name}</h2>
            <ul className="list-disc pl-5">
              {company.studentIDs.map((id, studentIndex) => {
                const student=findStudentById(id);
                return(
                <li key={studentIndex} className="text-gray-800">
                  Name: {student.name}, Interview Date: {student.interviewDate},
                  Interview Time: {student.interviewTime}, Status: {student.status}
                  </li>
                );
              }
            )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Interview