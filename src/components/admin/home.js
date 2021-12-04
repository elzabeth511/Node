import { CourseDetailsAdmin } from "./courseDetails";
import { CourseEnquiryViewAdmin } from "./courseEnquiryDetails";
import { CourseRegsiter } from "./courseRegister";
import ViewResourcesAdmin from "./resourceDetails";
import { ResourceEnquiryViewAdmin } from "./resurceEnquiryDetails";


export function HomeAdmin() {
   return (<>
      <CourseRegsiter />
      <CourseDetailsAdmin />
      <CourseEnquiryViewAdmin />
      <ViewResourcesAdmin />
      <ResourceEnquiryViewAdmin />
   </>)
}