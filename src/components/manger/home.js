
import { ResourceEnquiryViewAdmin } from "../admin/resurceEnquiryDetails";
import { CourseEnquiryViewManger } from "./CourseEnquiryView";
import { CourseViewManger } from "./CourseView";
import { ResourceEnquiryViewManger } from "./ResourceEnquiryView";
import ViewResourcesManger from "./ResourceView";

export function HomeManger() {
    return(<>

   <section class="py-5">
                    <div class="container text-center">
                        <h2 class="mb-4">Welcome Manager</h2>
                        <p class="lead mb-5">Check For The Sales and Product Details...</p>
                        <div>
                           
                            
                            <div class="row align-items-center text-md-left mb-5">
                                {/* <div class="col-md-6 order-1 order-md-0">
                                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DlcAzpC4MLcXsHQJZEnKiIEzUAki0dngtA&usqp=CAU" alt="" data-removed="true" />
                                </div> */}
                                {/* <div class="col-md-6 mb-4 mb-md-0" data-removed="true">
                                    <span class="display-3 mb-2">03</span>
                                    <h3 class="mb-4">Learn With Us</h3>
                                    <p>As with all innovative technologies, sometimes unpredictable things will happen, and you can always count on our support to solve issues for you.</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
   {/* <ViewResourcesManger></ViewResourcesManger>
   <CourseViewManger />
   <CourseEnquiryViewManger/>
   <ResourceEnquiryViewManger/> */}
   
    </>)
}