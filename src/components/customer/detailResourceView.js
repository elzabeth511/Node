import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import { ResourceEnquiryRegistration } from "../../ResourceEnquiry/ResourceEnquiryRegistration";




function ViewResourceDetails() {
    const st = {
        //display:"inline",
        // align:"center",
        // marginTop:"0%",
        //marginLeft:"50%",
        borderStyle: "solid",
        backgroundColor: "orange",
        textAlign: "center",
        width: "50%",
        height: "auto",
        display: "center",
        margin: "auto",
        marginTop: "5%"
    }
    const st1 = {

        backgroundColor: "#4CAF50",/* Green */
        border: "none",
        color: "white",
        padding: "10px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "10px",
        margin: "auto",



    }
    //initialize the use case to empty

    
    const { resource_id } = useParams();
    const [resource, setResource] = useState([])
    
    useEffect(() => {
        getAllResources();
    }, []);

    const getAllResources = () => {
        axios.get(`http://localhost:5001/resource/${resource_id}`)
            .then(response => {
                setResource(response.data.data)
            })
            .catch(error => {
                console.log("error")
            });
            
    }   
    const resourceName = resource.resource_name
    console.log(resourceName)
    return (<>
        <div style={st}>
            <h1>Details of {resource.resource_name}</h1>
            <h2>Rent : {resource.rent}</h2>
            </div>
            <a href="/viewresource">Back to Resource List</a>
            <br /><br />
            <div> <ResourceEnquiryRegistration resourceName={resourceName} /></div>
            {/* <button type="button" className="btn btn-primary"
                onClick={(courseName)=>navigate('/courseenquiry')} style={st1}>Place Enquiry</button> */}
            <br /><br />
            {/* <button type="button" className="btn btn-primary"
                onClick={()=>DeleteCourse(course.id)} style={st1}>Delete</button> */}
       



    </>);
}

export default ViewResourceDetails;