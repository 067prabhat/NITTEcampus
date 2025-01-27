import Home from './Home';
import Login from './Login';
import Register from './Register';
import Courses from './courses';
import DataScience from './DataScience';
import NewCourse from './NewCourse';
import Contact from './Contact';
import About from './About';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path='/courses' element={<Courses/>}></Route>
          <Route path='/DataScience' element={<DataScience/>}></Route>
          <Route path="/courses/:courseSlug" element={<NewCourse />} />
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='About' element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
