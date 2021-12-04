import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { useNavigate } from "react-router";

//import CourseAccess from './courseAccess';




function ViewCourse() {
    const navigate=useNavigate()

    const st = {
        // display:"inline",
        // align:"center",
        // marginTop:"0%",
        //marginLeft:"50%",
        borderStyle: "solid",
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        float: 'left',
        //width: "20%",
        //marginTop: "5%",
        listStyleType: "none"


    }
    var img_style = {
        height: 200,
        width: 200
    }
    //initialize the usestate to empty
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        console.log('The use effect has been executed');

        axios
            .get('http://localhost:5001/course')
            .then(response => {
                console.log('Promise was fulfilled')
                console.log(response)
                setCourses(response.data)
            })

    }, [])

    return (
        <>
            <div >

                <h1 className="text-center display-1 "> Courselist </h1>
                <div >


                    {courses.map(course =>
                        <div key={course.id} >

                            <section class="py-3">
                                <div class="container text-center">
                                   
                                    <div>
                                        <div class="row align-items-center text-md-left mb-3 ">
                                            <div class="col-md-6 order-1 order-md-0">
                                                <img class="img-fluid" src={course.thumbnail} alt="" />
                                            </div>
                                            <div class="col-md-6 mb-4 mb-md-0 ">
                                                <span class="display-5 text-capitalize mb-2">{course.course_name}</span>
                                               
                                                <h3 class="mb-4 my-3"><button type="button" className="btn btn-primary"
                onClick={()=>navigate(`/detailcourseview/${course.id}`)} >View Details</button></h3>
                                                <p>Using our Piper Assistant application, you can move your data to be stored our decentralized network with simple drag &amp; drop.</p>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </section>
                            {/* <div class="card-group">
                                <div class="card">
                                    <div class="card-body">
                                        <img class="card-img-top thumbnail" src={course.thumbnail} alt="Card image cap" />
                                        <h4 class="card-title">{course.course_name}</h4>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>


                            </div> */}
                            {/* <div style={st} >
                                <img style={img_style} src={course.thumbnail} />
                                <h4>{course.course_name}</h4>
                                <Link to={`/detailcourseview/${course.id}`}> view details</Link>
                                <br />

                            </div> */}
                            <br />
                        </div>)}


                </div>
            </div>
        </>
    );
}

export default ViewCourse;




