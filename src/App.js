import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// 🔹 Header
import HeaderGroup from "./components/HeaderGroup";

// 🔹 Layout Wrapper
import SiteLayout from "./layouts/sitelayout";

// 🔹 Top Navigation Pages
import Home from "./toppages/home";
import Doctor from "./downpages/DoctorProfile";
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
import Healthcare from "./downpages/healthcare";
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

// 🔹 Dynamic Department Detail Page
import DepartmentDetail from "./departments/DepartmentDetail";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderGroup /> {/* FIXED NAVBAR — Should have only Link, no <a> */}

      <div className="">
        <Routes>

          {/* Parent layout wrapper */}
          <Route element={<SiteLayout />}>

            {/* ----------------------- */}
            {/* MAIN TOP MENU ROUTES   */}
            {/* ----------------------- */}
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctor />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery/media" element={<Media />} />

            {/* ----------------------- */}
            {/* ABOUT US SUB-PAGES      */}
            {/* ----------------------- */}
            <Route path="/abouttrust" element={<Abouttrust />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/milestones" element={<Milestones />} />

            {/* ----------------------- */}
            {/* BOTTOM NAVIGATION       */}
            {/* ----------------------- */}
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/specialities" element={<Specialities />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/news" element={<News />} />

            {/* ----------------------- */}
            {/* FACILITIES SUB-PAGES    */}
            {/* ----------------------- */}
            <Route path="/facilities/ambulance" element={<Ambulance />} />
            <Route path="/facilities/birthing-centre" element={<Birthing />} />
            <Route path="/facilities/blood-bank" element={<BloodBank />} />
            <Route path="/facilities/insurance" element={<Insurance />} />
            <Route path="/facilities/lab-services" element={<LabServices />} />
            <Route path="/facilities/radiology-services" element={<RadiologyServices />} />

            {/* ----------------------- */}
            {/* DYNAMIC DEPARTMENTS     */}
            {/* ----------------------- */}
            <Route path="/departments/:slug" element={<DepartmentDetail />} />

            {/* ----------------------- */}
            {/* 404 PAGE                */}
            {/* ----------------------- */}
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
      </div>
    </BrowserRouter>
  );
}
