export const students = [
    {id:1, name: 'Alice', company: 'Company A', interviewDate: '2023-04-15', interviewTime: '10:00 AM', status: 'Passed' },
    {id:2, name: 'Bob', company: 'Company A', interviewDate: '2023-04-16', interviewTime: '11:00 AM', status: 'Pending' },
    {id:3, name: 'Charlie', company: 'Company A', interviewDate: '2023-04-17', interviewTime: '09:00 AM', status: 'Failed' },
    {id:4, name: 'Dave', company: 'Company B', interviewDate: '2023-04-18', interviewTime: '10:00 AM', status: 'Passed' },
    {id:5, name: 'Eve', company: 'Company B', interviewDate: '2023-04-19', interviewTime: '11:00 AM', status: 'Pending' },
    {id:6, name: 'Frank', company: 'Company B', interviewDate: '2023-04-20', interviewTime: '09:00 AM', status: 'Failed' },
    // Add more student details as needed
  ];

export const companies = [
    { name: 'Company A', studentIDs: [1, 2, 3] },
    { name: 'Company B', studentIDs: [4, 5, 6] },
    // Add more companies and students as needed
  ];