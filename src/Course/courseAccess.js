import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate} from 'react-router-dom'
function CourseAccess(props) {
    console.log(props)
    const navigate = useNavigate()


  
    return (
    <>
   <div >
    <h4>{props.details.course_name}</h4>
    <Link to={`/coursedetails/${props.details.id}`}> view details</Link>
    <br/>
    <button type="button" className="btn btn-primary"
                onClick={()=>DeleteCourse(props.details.id)}>Delete</button>
    </div>
    </>
    
    );
    }
    function DeleteCourse(id){
        console.log('delete1 promise was fullfilled')
        axios
        .delete(`http://localhost:5001/course/${id}`)
        .then(response => {
        console.log('delete promise was fullfilled')
        console.log(response)
        })
        navigate('/CourseList')
        }

export default CourseAccess;

