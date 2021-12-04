import axios from "axios";
import { useEffect, useState } from "react";
const ViewResourcesManger = (props) => {
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
    return (
        <section class="py-5"><h1>Resource List </h1>
        <div class="container text-center">
        <div>
            {resources.length === 0 ? (<h5>Resources not available</h5>) : (
                <table className="table table-striped w-auto">
                <thead>
                    <tr>
                        <th>Resource Name</th>
                        {/* <th>Availabilty</th> */}
                        <th>Status</th>
                        <th>Rent</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        resources.map(resource => {
                            return (
                            <tr className="table-info" key={resource.resource_id}>
                                <th scope="row">{resource.resource_name}</th>
                                {/* <td>{resource.slot_availability.split("T")[0]}</td> */}
                                <td>{resource.status}</td>
                                <td>{resource.rent}</td>
                                
                            </tr>
                            )
                        })
                    }
                   
                    
                </tbody>
    
    
                </table>
            )}
            
        </div>
        </div>
        </section>
        
        
    )
}
export default ViewResourcesManger;