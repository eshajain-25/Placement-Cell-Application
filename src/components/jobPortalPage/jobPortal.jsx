import React from 'react'

const companies = [
  {
    name: 'Company A',
    jobs: [
      { title: 'Software Engineer', location: 'New York', interviewDate: '2023-04-15' },
      // Example for another job at Company A
      { title: 'Project Manager', location: 'New York', interviewDate: '2023-04-20' },
    ],
  },
  {
    name: 'Company B',
    jobs: [
      { title: 'Data Analyst', location: 'San Francisco', interviewDate: '2023-05-20' },
      // Example for another job at Company B
      { title: 'Business Analyst', location: 'San Francisco', interviewDate: '2023-05-25' },
    ],
  },
  {
    name: 'Company C',
    jobs: [
      { title: 'Frontend Developer', location: 'Austin', interviewDate: '2023-06-01' },
      // Example for another job at Company C
      { title: 'Backend Developer', location: 'Austin', interviewDate: '2023-06-05' },
    ],
  },
  {
    name: 'Company D',
    jobs: [
      { title: 'Cybersecurity Specialist', location: 'Boston', interviewDate: '2023-07-15' },
      // Example for another job at Company D
      { title: 'Network Engineer', location: 'Boston', interviewDate: '2023-07-20' },
    ],
  },
  {
    name: 'Company E',
    jobs: [
      { title: 'UI/UX Designer', location: 'Remote', interviewDate: '2023-08-10' },
      // Example for another job at Company E
      { title: 'Graphic Designer', location: 'Remote', interviewDate: '2023-08-15' },
    ],
  },

  {
    name: 'Company E',
    jobs: [
      { title: 'UI/UX Designer', location: 'Remote', interviewDate: '2023-08-10' },
      // Example for another job at Company E
      { title: 'Graphic Designer', location: 'Remote', interviewDate: '2023-08-15' },
    ],
  },

  {
    name: 'Company E',
    jobs: [
      { title: 'UI/UX Designer', location: 'Remote', interviewDate: '2023-08-10' },
      // Example for another job at Company E
      { title: 'Graphic Designer', location: 'Remote', interviewDate: '2023-08-15' },
    ],
  },

  {
    name: 'Company E',
    jobs: [
      { title: 'UI/UX Designer', location: 'Remote', interviewDate: '2023-08-10' },
      // Example for another job at Company E
      { title: 'Graphic Designer', location: 'Remote', interviewDate: '2023-08-15' },
    ],
  },
];




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
    <div className="bg-[#050a44] container w-screen p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {companies.map((company, index) => (
        <CompanyCard key={index} company={company} />
      ))}
    </div>
  );
}

export default JobPortal