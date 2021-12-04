import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert} from 'react-confirm-alert';
const ViewResourcesAdmin = (props) => {
    const [resources, setResource] = useState([])
    const navigate = useNavigate()

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
    function deleteResource(id) {
        confirmAlert({
            title: 'Resource Delete',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios.delete("http://localhost:5001/resource/" + id)
                            .then((response) => {
                                toast.success("Resource deleted succesfully")
                                getAllResources();
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


    return (
        <div className="container">
            {resources.length === 0 ? (<h5>Resources not available</h5>) : (
                <table className="table table-striped w-full">
                    <thead>
                        <tr>
                            <th>Resource Name</th>
                            {/* <th>Availabilty</th> */}
                            <th>Status</th>
                            <th>Rent</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            resources.map(resource => {
                                return (
                                    <tr className="" key={resource.resource_id}>
                                        <th scope="row">{resource.resource_name}</th>

                                        <td>{resource.status}</td>
                                        <td>{resource.rent}</td>
                                        <td>
                                            <button className="btn btn-outline-primary" onClick={() => navigate(`/resourceedit/${resource.resource_id}`)} >Edit</button>
                                            <button className="btn btn-outline-danger" style={{ marginLeft: 8 }} onClick={() => deleteResource(resource.resource_id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>


                </table>
            )}
            <ToastContainer />
        </div>


    )
}

export default ViewResourcesAdmin;
