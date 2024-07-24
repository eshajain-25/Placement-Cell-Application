import React from 'react'
import './interview.css'
import { students,companies } from '../../dataFiles/interviews';




function Interview() {
  const findStudentById = (id) => {
    return students.find(student => student.id === id);
  };
  return (
    <div className="bg-[#050a44] w-screen h-screen min-height-screen p-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {companies.map((company, index) => (
        <div key={index} className="bg-[#f8eded] border border-[rgba(255,255,255,0.18)] rounded-lg p-5">
          <h2 className="flex justify-center text-xl font-bold text-gray-900">{company.name}</h2>
          <div className="flex flex-col flex-wrap -m-2">
            {company.studentIDs.map((id, studentIndex) => {
              const student = findStudentById(id);
              return (
                <div key={studentIndex} className="p-2 w-full">
                  <div className="h-full flex-col justify-between bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-gray-900">Name: {student.name}</h3>
                    <p>Interview Date: {student.interviewDate}</p>
                    <p>Interview Time: {student.interviewTime}</p>
                    <p>Status: {student.status}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Interview