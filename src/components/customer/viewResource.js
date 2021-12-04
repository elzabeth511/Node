import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";


//import CourseAccess from './courseAccess';




function ViewResource() {

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

    const [resources, setResource] = useState([])
    
    useEffect(() => {
        getAllResources();
    }, []);

    const getAllResources = () => {
        axios.get("http://localhost:5001/resource")
            .then(response => {
                setResource(response.data.data)
            })
            .catch(error => {
                console.log("error")
            });
    }   
    //initialize the usestate to empty
    // const [resources, setResources] = useState([]);
    // useEffect(() => {
    //     console.log('The use effect has been executed');

    //     axios
    //         .get('http://localhost:5001/resource')
    //         .then(response => {
    //             console.log('Promise was fulfilled')
    //             console.log(response)
    //             setResources(response.data)
    //         })

    // }, [])

    return (
        <>
           <div >

<h1 style={{ marginTop: "2%", textAlign: "center" }}> Resource list </h1>
<div >


    {resources.map(resource =>
        <div key={resource.resource_id} >
            <div style={st} >
                <img style={img_style} src={resource.thumbnail} />
                <h4>{resource.resource_name}</h4>
                <Link to={`/detailresourceview/${resource.resource_id}`}> view details</Link>
                <br />


            </div>
            <br />
        </div>)
    }


</div>
</div>


        </>
    );
}

export default ViewResource;




