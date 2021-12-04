import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import './admin.css'
import CourseDetails from "../../Course/courseDetails";
import CourseEnquiryDetails from "../../CourseEnquiry/CourseEnquiryDetails";
import EditCourseEnquiry from "../../CourseEnquiry/EditCourseEnquiry";
import Login from "../../Login";
import { ResourceEnquiryDetails } from "../../ResourceEnquiry/ResourceEnquiryDetails";
import { ResourceEnquiryEdit } from "../../ResourceEnquiry/ResourceEnquiryEdit";
import CreateResource from "../../Resources/CreateResource";
import UpdateResource from "../../Resources/UpdateResource";
import { CourseDetailsAdmin } from "./courseDetails";
import CourseEditAdmin from "./courseEdit";
import { useNavigate } from "react-router";
import { CourseEnquiryViewAdmin } from "./courseEnquiryDetails";
import { CourseRegsiter } from "./courseRegister";
import { HomeAdmin } from "./home";
import ViewResourcesAdmin from "./resourceDetails";
import { ResourceEnquiryViewAdmin } from "./resurceEnquiryDetails";


export function AdminApp() {
    
    return (<>
        <Router>
        
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#8ec63f" }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <img src="logo.png" width={100} />
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/admin">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/course">Course</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/courseList">Course List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/resource">Resource</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/resourceList">Resource List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/courseEnqiury">Course Enquiry</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/resourceEnquiry">Resource Enquiry</Link>
                            </li>
                        </ul>

                        <div class="d-flex">
                            {localStorage.getItem('mytoken') && <div><Link className="nav-link" onClick={() =>{localStorage.clear(); window.location= '/login'}} to="/login">Logout</Link></div>}
                        </div>
                    </div>
                </div>
            </nav>
            {/* <div><Link to="/admin">Home</Link></div>
        <div><Link to="/course">Course</Link></div>
        <div><Link to="/courseList">courseList</Link></div>
        <div><Link to="/resource">Resource</Link></div>       
        <div><Link to="/resourceList">ResourceList</Link></div>
        <div><Link to="/courseEnqiury">Course Enquiry</Link></div>

        <div><Link to="/resourceEnquiry">Resource Enquiry</Link></div> */}
            {/* <div><Link to="/login">logout</Link></div> */}
            {/* {localStorage.getItem('mytoken') &&localStorage.getItem('role')==="admin"&& <div ><Link  to="/login">Login</Link></div>} */}



            <div className="container" style={{ marginTop: "25px" }}>
                <Routes>
                    <Route path="/admin" element={<HomeAdmin />} />
                    <Route path="/course" element={<CourseRegsiter />} />
                    <Route path="/courseList" element={<CourseDetailsAdmin />} />
                    <Route path="/resourceList" element={<ViewResourcesAdmin />} />
                    <Route path="/courseEnqiury" element={<CourseEnquiryViewAdmin />} />
                    <Route path="/resourceEnquiry" element={<ResourceEnquiryViewAdmin />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/courseedit/:id" element={<CourseEditAdmin />} />
                    <Route path="/coursedetails/:id" element={<CourseDetails />} />
                    <Route path="/resource" element={<CreateResource />} />
                    <Route path="/resourceedit/:id" element={<UpdateResource />} />
                    <Route path="/courseenquiryupdate/:course_enquiryId" element={<EditCourseEnquiry />} />
                    <Route path="/courseenquirydetails/:course_enquiryId" element={<CourseEnquiryDetails />} />

                    <Route path="/resourceenquiryedit/:resource_enquiry_id" element={<ResourceEnquiryEdit />} />
                    <Route path="/resourceenquirydetails/:resource_enquiry_id" element={<ResourceEnquiryDetails />} />

                </Routes>

            </div>

        </Router>



    </>)
}