import { useState, useEffect } from "react";
import axios from "axios";

export function ResourceEnquiryViewManger() {
  const [resourceEnquiryList, setResourceEnquiryList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5001/resourceEnquiry").then((response) => {
      console.log("promise was fullfilled");
      console.log(response);
      setResourceEnquiryList(response.data);
    });
  }, []);
  return (
    <> <section class="py-5"><h1>Resource Enquiries List </h1>
      <div class="container text-center">

        <div>
          {resourceEnquiryList.length === 0 ? (
            <h5>resourceEnquirys not available</h5>
          ) : (
            <table className="table table-striped w-auto">
              <thead>
                <tr>
                  <th>Resource Name</th>
                  <th>Enquirer Name</th>
                  <th>Enquirer Email</th>
                  <th>Enquirer Phone</th>
                  <th>Previous Response Status</th>
                  <th>Current Response Status</th>
                </tr>
              </thead>
              <tbody>
                {resourceEnquiryList.map((resourceEnquiry) => {
                  return (
                    <tr
                      className="table-info"
                      key={resourceEnquiry.resource_enquiry_id}
                    >
                      <th scope="row">{resourceEnquiry.resource_name}</th>
                      <td>{resourceEnquiry.enquirer_name}</td>
                      <td>{resourceEnquiry.enquirer_email}</td>
                      <td>{resourceEnquiry.enquirer_phone}</td>

                      <td>{resourceEnquiry.previous_status}</td>
                      <td>{resourceEnquiry.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
    </>
  );
}
