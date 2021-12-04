import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';


function CourseDetails(){
    const styling={
        borderStyle : "solid",
        backgroundColor:"orange",
        textAlign:"center",
        width:"50%",
        height:"auto",
        display:"center",
        margin:"auto" ,
        marginTop:"5%"  
    }
    const styling2={
        backgroundColor: "#4CAF50" ,/* Green */
        border:"none",
        color: "white",
        padding: "10px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "10px",
        margin:"auto",
    }
//initialize the use case to empty

const[course, setCourse] = useState([])
const {id} = useParams();
const navigate=useNavigate();
useEffect(()=> {
    axios
    .get(`http://localhost:5001/course/${id}`)
    .then(response => {
    console.log('promise was fullfilled')
    console.log(response)
    setCourse(response.data)
    })
    },[])

    return (<>
        <div style={styling}>
        <h1>Details of {course.course_name}</h1>
        <h2>Description : {course.description}</h2>
        <h2>Course Fee : {course.course_fee}</h2>
        <h2>Total Seats : {course.total_seat}</h2>
        <h2>Available Seats : {course.available_seat}</h2>
        <a href="/courselist">Back to Course List</a>
        <br/><br/>
        <button type="button" className="btn btn-primary"
                onClick={()=>navigate(`/courseedit/${course.id}`)} style={styling2}>Edit Course</button>
        <br/><br/>
        <button type="button" className="btn btn-primary"
                onClick={()=>DeleteCourse(course.id)} style={styling2}>Delete</button>
        </div>

        <ToastContainer/>


        </>);
}

    const DeleteCourse = (id) => {
        confirmAlert({
            title: 'Course Delete',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    axios.delete(`http://localhost:5001/course/${id}`)
                        .then((response) => {
                            toast.success("Course deleted succesfully")
                            window.location = '/CourseList'
                        })
                        .catch((error) => {
                            toast.success("Error occured while Deleting")
                        })
                }
              },
              {
                label: 'No'
              }
            ]
          });
        
    }

export default CourseDetails;