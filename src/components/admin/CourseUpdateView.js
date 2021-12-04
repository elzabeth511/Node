import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import axios from "axios";
import { useNavigate } from 'react-router-dom';



function CourseDetails(){
    const st={
        //display:"inline",
       // align:"center",
        // marginTop:"0%",
        //marginLeft:"50%",
        borderStyle : "solid",
        backgroundColor:"orange",
        textAlign:"center",
        width:"50%",
        height:"auto",
        display:"center",
        margin:"auto" ,
        marginTop:"5%"  
    }
    const st1={
        
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
        <div style={st}>
        <h1>Details of {course.course_name}</h1>
        <h2>Description : {course.description}</h2>
        <h2>Course Fee : {course.course_fee}</h2>
        <h2>Total Seats : {course.total_seat}</h2>
        <h2>Available Seats : {course.available_seat}</h2>
        <a href="/courselist">Back to Course List</a>
        <br/><br/>
        <button type="button" className="btn btn-primary"
                onClick={()=>navigate(`/courseedit/${course.id}`)} style={st1}>Edit Course</button>
        <br/><br/>
        <button type="button" className="btn btn-primary"
                onClick={()=>DeleteCourse(course.id)} style={st1}>Delete</button>
        </div>



        </>);
}
function DeleteCourse(id){
    //const navigate = useNavigate()
    console.log('delete1 promise was fullfilled')
    axios
    .delete(`http://localhost:5001/course/${id}`)
    .then(response => {
    console.log('delete promise was fullfilled')
    console.log(response)
    })
    navigate('/CourseList')
    }
    

export default CourseDetails;