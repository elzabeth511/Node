import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Login from "../../Login";
import { CourseEnquiryViewManger } from "./CourseEnquiryView";
import { CourseViewManger } from "./CourseView";
import { HomeManger } from "./home";
import { ResourceEnquiryViewManger } from "./ResourceEnquiryView";
import ViewResourcesManger from "./ResourceView";
import { useNavigate } from "react-router";
export function ManagerApp() {
    const navigate = useNavigate()
  return (
    <>
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
                                <Link className="nav-link active" aria-current="page" to="/manager">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/course">Course</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/courseenquiry">Course Enquiries</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/resourse">Resource</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/resourceenquiry">Resource Enquiries</Link>
                            </li>
                           
                        </ul>

                        <div class="d-flex">
                            {localStorage.getItem('mytoken') && <div><Link className="nav-link" onClick={() => navigate( '/login')} to="/login">Logout</Link></div>}
                        </div>
                    </div>
                </div>
            </nav>
        {/* <div><Link to="/manager">Home</Link></div>
        <div><Link to="/course">Course</Link></div>
        <div><Link to="/courseenquiry">Course Enquiry</Link></div>
        <div><Link to="/resourse">Resource</Link></div>
        <div><Link to="/resourceenquiry">Resource Enquiry</Link></div>
        {localStorage.getItem('mytoken') && <div><Link onClick={() =>  = '/login'} to="/login">Logout</Link></div>}
    <a href='https://analytics.google.com/analytics/web/?authuser=2#/report-home/a214024739w295186749p256292937' >Page Visit</a> */}
        <Routes>
          <Route path="/manager" element={<HomeManger />} />
          <Route path="/course" element={<CourseViewManger />} />
          <Route path="/courseenquiry" element={<CourseEnquiryViewManger />} />
          <Route path="/resourse" element={<ViewResourcesManger />} />
          <Route path="/resourceenquiry" element={<ResourceEnquiryViewManger />} />
          <Route path="/login" element={<Login />} />


        </Routes>
      </Router>
    </>
  );
}
