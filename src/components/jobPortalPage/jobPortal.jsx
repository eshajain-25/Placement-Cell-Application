import React from 'react'
import {companies} from '../../dataFiles/companyDetails'




function CompanyCard({ company }) {
  return (
    <div className="bg-[#f8eded] p-4 rounded-lg shadow">
      <h2 className="text-center font-bold">{company.name}</h2>
      {company.jobs.map((job, index) => (
        <JobDetailsCard key={index} job={job} />
      ))}
      
    </div>
  );
}

function JobDetailsCard({job}) {
  return (
    <div className="bg-white p-3 text-sm rounded-lg m-2 shadow">
      <p><strong>Job Title:</strong> {job.title}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Interview Date:</strong> {job.interviewDate}</p>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Apply
        </button>
      </div>
    </div>

  )
}


function JobPortal() {
  return (
    <div className="bg-[#050a44] w-screen min-height-screen p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {companies.map((company, index) => (
        <CompanyCard key={index} company={company} />
      ))}
    </div>
  );
}

export default JobPortal