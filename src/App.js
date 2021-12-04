
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import CourseApp from "./Course/course";
import React, { useEffect } from "react";

import CourseDetails from "./Course/courseDetails";
import CourseEdit from "./Course/courseEdit";
import CourseList from "./Course/courseList";
import CourseAccess from "./Course/courseAccess";


import './App.css';


import { ResourceEnquiryApp } from "./ResourceEnquiry/ResourceEnquiryApp";

///---------------------------------jibby------------------------/////
import About from "./CourseEnquiry/About";
import ThankYou from "./CourseEnquiry/ThankYou";
import CourseEnquiryForm from "./CourseEnquiry/CourseEnquiryForm";
import CourseEnquiryList from "./CourseEnquiry/CourseEnquiryList";
import CourseEnquiryDetails from "./CourseEnquiry/CourseEnquiryDetails";
import EditCourseEnquiry from "./CourseEnquiry/EditCourseEnquiry";
import AdminLanding from "./CourseEnquiry/AdminLanding";
import Login from "./Login";
import ManagerLanding from "./CourseEnquiry/ManagerLanding";
import './ResourceEnquiry/resourcesStyles.css'

import Home from "./CourseEnquiry/Home";
import { ManagerApp } from "./components/manger/mangerApp";
import { HomeAdmin } from "./components/admin/home";
import { CourseEnquiryViewAdmin } from "./components/admin/courseEnquiryDetails";

import ReactGA from 'react-ga';



import CreateResource from "./Resources/CreateResource";
import './App.css';
import ViewResources from "./Resources/ViewResources";
import UpdateResource from "./Resources/UpdateResource";


const styling={
  marginTop:"0%",
  display:"inline",
  backgroundColor:"blue"
}
const styling1={
  marginTop:"0%",
  
  
}


function App() {
 
 
  return (
   <>
    {/* <ResourceEnquiryApp/> */}
    <Router>
      <div style={styling}>
      <header>
      <nav class="navbar navbar-dark bg-dark">
        
          <ul>
            <div id="col">
           <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/course">Create Course</Link>
            </li>
           
            <li>
              <Link to="/courselist">View Course</Link>
            </li>
            <li>
              <Link to="/resource/create">Create Resource</Link>
            </li>
            <li>
              <Link to="/resource/view">View Resources</Link>
            </li>
         {/* -------------------------jiby------------ */}
         <div className='navbar'>


<div><Link className="Link" to='/'>Home</Link></div>
<div><Link className="Link" to='/about'>About</Link></div>
{!localStorage.getItem('mytoken') && <div><Link className="Link" to='/courseenquiry'>Course Enquiry Form</Link></div>}
{localStorage.getItem('mytoken') && <div><Link className="Link" to="/courseenquirylist">Course Enquiry List</Link></div>}
{/* <div><Link to ='/courseenquirylist'>View Course Enquiry List </Link></div> */}
{!localStorage.getItem('mytoken') && <div ><Link className="Link" to="/login">Login</Link></div>}
{localStorage.getItem('mytoken') && <div><Link className="Link" onClick={() => navigate('/login')} to="/login">Logout</Link></div>}

<div></div>

</div>
        
            </div>
          </ul>
          <hr/>

        </nav>
        </header>


        <div className="container" style={styling1} >  
        <Routes>
          <Route path="/"element ={<Home/>}/>
          <Route path="/courseedit" element={<CourseEdit />}/>
          <Route path="/course" element={<CourseApp />}/>
          <Route path="/courselist" element={<CourseList />}/>
          <Route path="/courseaccess" element={<CourseAccess />}/>
          <Route path="/courseedit/:id" element={<CourseEdit/>}/>
          <Route path="/coursedetails/:id" element={<CourseDetails />}/>
          <Route path="/coursedetails" element={<CourseDetails />}/>
          <Route path="/resource/create" element={<CreateResource />}/>
          <Route path="/resource/view" element={<ViewResources />}/>

       
       {/* -------------------------------jiby------------- */}
       <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courseenquiry" element={<CourseEnquiryForm />} />
        <Route path="/courseenquirylist" element={<CourseEnquiryList />} />
        <Route path="/courseenquirydetails/:course_enquiryId" element={<CourseEnquiryDetails />} />
        <Route path="/courseenquiryupdate/:course_enquiryId" element={<EditCourseEnquiry />} />
        {/* <Route path="/admin" element={<AdminLanding />} /> */}
        <Route path="/admin" element={<HomeAdmin />} />

        <Route path="/manager" element={<ManagerApp />} />

        <Route path="/login" element={<Login />} />

        <Route path="/thanks" element={<ThankYou />} />
        {/* -------------------------new changes------- */}

          <Route path="/resoure/update/:id" element={<UpdateResource />}/>


        </Routes>
        </div>
      </div>
    </Router>
   
   </>
  );
}

export default App;