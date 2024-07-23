import Home from './components/Homepage/home.jsx'
import Navbar from './components/navbar/navbar.jsx'
import './App.css'
import StudentCard from './components/StudentCard/studentCard.jsx'
function App() {
  return (
    
    <div className='overflow-hidden'>
      {/* <div className='fixed top-0 w-full'><Navbar/></div> */}
      <Home/>
      {/* <StudentCard students={Students}></StudentCard> */}
    </div>
  )
}

export default App
