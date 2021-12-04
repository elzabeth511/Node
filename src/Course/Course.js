import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";
function CourseApp(){
return (<>
<MyForm />
</>);
}

function MyForm() {
    const navigate = useNavigate()
    const mystyle={
        maxWidth: "500px",
        background: "white",
        padding: "10px",
        borderStyle:"solid",
        backgroundColor:"orange",
        margin:"auto",
        textAlign:"center",
        marginTop:"5%"
     
    }

    var page_name;
    var visit=0;
    //initialize useState with emtpy {} and it will return 2 values,
    //The current state, and a function that updates the state.
    const [inputs, setInputs] = useState({});
    function handleChange(event){
    //during change of every element.
    //save name in 'name' and its value in value
    const name = event.target.name;
    const value = event.target.value;
    // setInputs is the function that updates the state.
    setInputs(values => ({...values, [name]: value}))
    }
    function handleSubmit(event) {
        //to prevent default html form submit behaviour
        event.preventDefault();
        //alert the current state
        console.log(inputs);
        axios
        .post('http://localhost:5001/course',inputs)
        .then(response => {
            console.log('Promise was fulfilled')
            console.log(response)
            navigate('courselist')
        })

        }
        return (
            <div  className="d-flex justify-content-center" style={mystyle} >
            <form className="row col-md-6 g-3 needs-validation" onSubmit={handleSubmit}>

            
            
            <div className="col-md-12">
                 < label  for="validationCustom01" className="form-label">Course name:</label><br/>
                     <input type="text" name="course_name"
                        value={inputs.course_name || ""}
                        page_name={inputs.course_name}
                        onChange={handleChange}
                        required
                    />
                
                
            </div>
            <div>
            
                <label>Description:</label><br/>
            
                     <textarea name="description"
                        value={inputs.description || ""}
                        onChange={handleChange}
                        required
                    />
                   
                
              
            </div>
                 
     
            <div>
                <label>Course_fee:</label><br/>
        
                        <input type="text" name="course_fee"
                        value={inputs.course_fee || ""}
                        onChange={handleChange}
                        required
                        
                        />
            </div>    
            <div>
                <label>total_seat:</label><br/>
                    <input type="number" name="total_seat"
                        value={inputs.total_seat || ""}
                        onChange={handleChange}
                        required
                        
                    />
                        
                
            </div>
            <div>
               
                 
                <label for="validationCustom01" className="form-label">available_seat:</label><br/>
                  <input type="number" name="available_seat"
                        value={inputs.available_seat || ""}
                        onChange={handleChange}
                        min="0" max="total_seat.value"
                        
                    />
             
               
            </div>
                
            <div>
            <button className="btn btn-primary" type="submit">ADD</button>
            </div>
           

            </form> 
            </div>
        )
}


  
export default CourseApp;