import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Home from './components/homepage/home.jsx';
import Interview from './components/Interview/interview.jsx'; // Assuming you have this component
import JobPortal from './components/JobPortal/jobPortal.jsx'; // Assuming you have this component
import Profile from './components/Profile/profile.jsx'; // Assuming you have this component
import Login from './components/Login/login.jsx'; // Assuming you have this component
import Navbar from './components/navbar/navbar.jsx';
import './App.css';

// Mock authentication function
// const isAuthenticated = () => {
//   // Implement your authentication logic here
//   // For now, it returns false to simulate a non-authenticated user
//   return false;
// };

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            {/* {isAuthenticated() ? <Home /> : <Redirect to="/login" />} */}
            <Home/>
          </Route>
          <Route path="/interview" exact>
            {/* {isAuthenticated() ? <Interview /> : <Redirect to="/login" />} */}
            <Interview/>
          </Route>
          <Route path="/job-portal" exact>
            {/* {isAuthenticated() ? <JobPortal /> : <Redirect to="/login" />} */}
            <JobPortal/>
          </Route>
          <Route path="/profile" exact>
            {/* {isAuthenticated() ? <Profile /> : <Redirect to="/login" />} */}
            <Profile/>
          </Route>
          <Route path="/login" exact component={Login} />
          <Route path="/logout" exact>
            {/* Implement logout logic here, then redirect to login */}
            {/* This could be a button inside Navbar or a dedicated route */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;