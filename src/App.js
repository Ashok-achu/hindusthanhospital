import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// 🔹 Header
import HeaderGroup from "./components/HeaderGroup";

// 🔹 Layout Wrapper
import SiteLayout from "./layouts/sitelayout";

// 🔹 Top Navigation Pages
import Home from "./toppages/home";
import Mettupalayam from "./toppages/Mettupalayam";
import Doctor from "./downpages/healthcare";
import AboutUs from "./toppages/aboutus";
import Academics from "./toppages/academics";
import Testimonials from "./toppages/testimonials";
import Careers from "./toppages/careers";
import Contact from "./toppages/contact";
import Media from "./toppages/Media";

// 🔹 About Us Subpages
import Abouttrust from "./toppages/abouttrust";
import Mission from "./toppages/Mission";
import Profile from "./toppages/Profile";
import Milestones from "./toppages/Milestones";

// 🔹 Bottom Navigation Pages

import Specialities from "./downpages/specialities";
import FacilitiesPage from "./downpages/Facilities";
import Blog from "./downpages/blog";
import News from "./downpages/news";

// 🔹 Facilities Subpages
import Ambulance from "./facilities/Ambulance";
import Birthing from "./facilities/Birthing";
import BloodBank from "./facilities/BloodBank";
import Insurance from "./facilities/Insurance";
import LabServices from "./facilities/LabServices";
import RadiologyServices from "./facilities/RadiologyServices";

// ✅ ADD THESE (as per your requirement)
import MHC from "./facilities/MHC";
import Rooms from "./facilities/Rooms";
import IT from "./facilities/IT";
import Canteen from "./facilities/Canteen";
import Pharmacy from "./facilities/Pharmacy";

// 🔹 Dynamic Department Detail Page
import DepartmentDetail from "./departments/DepartmentDetail";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      

      <Routes>
        <Route element={<SiteLayout />}>

          {/* MAIN ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/mettupalayam" element={<Mettupalayam />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery/media" element={<Media />} />

          {/* ABOUT SUB ROUTES */}
          <Route path="/abouttrust" element={<Abouttrust />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/milestones" element={<Milestones />} />

          {/* BOTTOM NAV */}
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/news" element={<News />} />

          {/* FACILITY SUB ROUTES */}
          <Route path="/facilities/ambulance" element={<Ambulance />} />
          <Route path="/facilities/birthing-centre" element={<Birthing />} />
          <Route path="/facilities/blood-bank" element={<BloodBank />} />
          <Route path="/facilities/insurance" element={<Insurance />} />
          <Route path="/facilities/lab-services" element={<LabServices />} />
          <Route path="/facilities/radiology-services" element={<RadiologyServices />} />

          {/* ✅ NEW FACILITIES ROUTES */}
          <Route path="/facilities/mhc" element={<MHC />} />
          <Route path="/facilities/rooms" element={<Rooms />} />
          <Route path="/facilities/it" element={<IT />} />
          <Route path="/facilities/canteen" element={<Canteen />} />
          <Route path="/facilities/pharmacy" element={<Pharmacy />} />

          {/* DYNAMIC DEPARTMENT */}
          <Route path="/departments/:slug" element={<DepartmentDetail />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <h2 className="text-center py-20 text-2xl font-bold text-red-600">
                404 — Page Not Found
              </h2>
            }
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
