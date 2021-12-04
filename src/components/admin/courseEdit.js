import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
// import './edit.css'
function CourseEditAdmin() {
    const { id } = useParams();
    return (<>
        <h1 style={{ textAlign: "center", margin: "2%" }}> Course Edit</h1>
        <MyForm id={id} />
    </>);
}

function MyForm(props) {
    const navigate=useNavigate()
    const mystyle = {
        maxWidth: "500px",
        margin: "auto",
        background: "white",
        padding: "10px",
        borderStyle: "solid",

        textAlign: "center",
        marginTop: "3%",

        backgroundColor: "orange",
    }
    //initialize useState with emtpy {} and it will return 2 values,
    //The current state, and a function that updates the state.
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:5001/course/${props.id}`)
            .then(response => {
                console.log('promise was fullfilled')
                console.log(response)
                setInputs(response.data)
            })
    }, []);

    function handleChange(event) {
        //during change of every element.
        //save name in 'name' and its value in value
        const name = event.target.name;
        const value = event.target.value;
        // setInputs is the function that updates the state.
        setInputs(values => ({ ...values, [name]: value }))
    }
    function handleSubmit(event) {
        //to prevent default html form submit behaviour
        event.preventDefault();
        //alert the current state
        console.log(inputs);
        if (inputs.total_seat > inputs.available_seat) {
            axios
                .put(`http://localhost:5001/course/${props.id}`, inputs)
                .then(response => {
                    console.log('Promise was fulfilled')
                    console.log(response)
                    alert("the user details are updated");
                })
            navigate( `/coursedetails/${props.id}`)
        }
        else {
            alert('Available seat greater than total seat')
        }
    }
    return (
        <div className="d-flex justify-content-center" style={mystyle} >
            <form className="row col-md-6 g-3 needs-validation" onSubmit={handleSubmit}>



                <div className="col-md-12">
                    < label for="validationCustom01" className="form-label">Course name:</label><br />
                    <input type="text" name="course_name"
                        value={inputs.course_name || ""}
                        onChange={handleChange}
                        required
                    />


                </div>
                <div>

                    <label>Description:</label><br />

                    <textarea name="description"
                        value={inputs.description || ""}
                        onChange={handleChange}
                        required
                    />



                </div>
                
                <div>
                    <label>Course Thumbnail URL:</label><br />

                    <input type="text" name="thumbnail"
                        value={inputs.thumbnail || ""}
                        onChange={handleChange}
                        required

                    />
                </div>


                <div>
                    <label>Course_fee:</label><br />

                    <input type="text" name="course_fee"
                        value={inputs.course_fee || ""}
                        onChange={handleChange}
                        required

                    />
                </div>
                <div>
                    <label>total_seat:</label><br />
                    <input type="text" name="total_seat"
                        value={inputs.total_seat || ""}
                        onChange={handleChange}
                        required

                    />


                </div>
                <div>


                    <label for="validationCustom01" className="form-label">available_seat:</label><br />
                    <input type="text" name="available_seat"
                        value={inputs.available_seat || ""}
                        onChange={handleChange}
                        required

                    />


                </div>

                <div>
                    <button className="btn btn-primary" type="submit">submit</button>
                </div>


            </form>
        </div>
    )
}
export default CourseEditAdmin;