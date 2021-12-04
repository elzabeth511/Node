import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import React from "react";
import Home from "../../CourseEnquiry/Home";
import About from "../../CourseEnquiry/About";
import ThankYou from "../../CourseEnquiry/ThankYou";
import Login from "../../Login";
import ViewCourse from "./viewCourse";
import ViewCourseDetails from "./detailCourseView";
import CourseEnquiryForm from "../../CourseEnquiry/CourseEnquiryForm";
import ViewResource from "./viewResource";
import ViewResourceDetails from "./detailResourceView";
import  { useEffect } from "react";
import ReactGA from 'react-ga';
import './custapp.css'
function CustomerApp(){
    useEffect(()=>
    {
      ReactGA.initialize('UA-214024739-1')
    
      ReactGA.pageview(window.location.pathname + window.location.search)
    },[])
    
    useEffect(() => {
      console.log(window.location.pathname)
     })
    return(
        <>
<Router>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        <a class="nav-link" href="/">Home </a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/about">About </a>

        </li>
        <li class="nav-item">
        <a class="nav-link" href="/viewcourse">ViewCourse </a>

        </li>

        <li class="nav-item">
        <a class="nav-link" href="/viewresource">View Resource </a>

        </li>
        <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>

        </li>


        </ul>
    </div>
</nav>


<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/thanks" element={<ThankYou/>} />
<Route path="/login" element={!localStorage.getItem('mytoken')&&<Login />} />
<Route path="/viewcourse" element={<ViewCourse />} />
<Route path="/viewresource" element={<ViewResource />} />

<Route path="/detailcourseview/:id" element={<ViewCourseDetails />} />
<Route path="/detailresourceview/:resource_id" element={< ViewResourceDetails />} />

<Route path="/courseenquiry" element={<CourseEnquiryForm />} />




</Routes>
</Router>
        </>
    )

}

export default CustomerApp;