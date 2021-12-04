import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import "./courseView.css";
import { useNavigate } from "react-router-dom";
import CourseEnquiryForm from "../../CourseEnquiry/CourseEnquiryForm";

function ViewCourseDetails() {
  //initialize the use case to empty

  const [course, setCourse] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:5001/course/${id}`).then((response) => {
      console.log("promise was fullfilled");
      console.log(response);
      setCourse(response.data);
    });
  }, []);
  const courseName = course.course_name;
  console.log(courseName);
  return (
    <>
      
        <div className="container row mt-3">
            <div className="col-md-8 order-2 bg-dark bg-gradient
 text-white p-5 ">
              <CourseEnquiryForm courseName={courseName} />
            </div>

            <div className="col-md-4  mb-4 mb-md-0 order-0 bg-info p-5 bg-gradient
" data-removed="true">
              <img className="img-fluid" src={course.thumbnail} />
              <div className="card-body">
                <h4 className="card-title text-capitalize display-3 text-light">{course.course_name}</h4>
                <p className="card-text fs-3 text-lower">{course.description}</p>
                <p className="card-text fs-3">course Fee : <label className="text-light fs-2 bd-highlight text-nowrap">{course.course_fee}</label></p>
              <bitton className="text-center btn btn-dark float-end btn-lg" onClick={()=>navigate("/viewcourse")}>back</bitton>
              </div>
              
            </div>
     
        </div>
  
    </>
  );
}

export default ViewCourseDetails;
