import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/sitelayout";

// Header
import HeaderGroup from "./components/HeaderGroup";

// Top navigation pages
import Home from "./toppages/home";
import AboutUs from "./toppages/aboutus";
import Academics from "./toppages/academics";
import Testimonials from "./toppages/testimonials";
import Careers from "./toppages/careers";
import Contact from "./toppages/contact";

// About Us Subpages
import Abouttrust from "./toppages/abouttrust";
import Mission from "./toppages/Mission";
import Profile from "./toppages/Profile";
import Milestones from "./toppages/Milestones";
import ScrollToTop from "./components/ScrollToTop";


// Down navigation pages
import Healthcare from "./downpages/healthcare";
import Specialities from "./downpages/specialities";
import FacilitiesPage from "./downpages/Facilities";
import Blog from "./downpages/blog";
import News from "./downpages/news";

// Facilities Subpages
import Ambulance from "./facilities/Ambulance";
import Birthing from "./facilities/Birthing";
import BloodBank from "./facilities/BloodBank";
import Insurance from "./facilities/Insurance";
import LabServices from "./facilities/LabServices";
import RadiologyServices from "./facilities/RadiologyServices";

// Department dynamic
import DepartmentDetail from "./departments/DepartmentDetail";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <HeaderGroup />

      <div className="pt-28 md:pt-32">
        <Routes>
          <Route element={<SiteLayout />}>

            {/* Main Navigation */}
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />

            {/* About Us inside pages */}
            <Route path="/abouttrust" element={<Abouttrust />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/milestones" element={<Milestones />} />

            {/* Down Navigation */}
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/specialities" element={<Specialities />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/news" element={<News />} />

            {/* Facilities Subpages */}
            <Route path="/facilities/ambulance" element={<Ambulance />} />
            <Route path="/facilities/birthing-centre" element={<Birthing />} />
            <Route path="/facilities/blood-bank" element={<BloodBank />} />
            <Route path="/facilities/insurance" element={<Insurance />} />
            <Route path="/facilities/lab-services" element={<LabServices />} />
            <Route path="/facilities/radiology-services" element={<RadiologyServices />} />

            {/* Dynamic Department Pages */}
            <Route path="/departments/:slug" element={<DepartmentDetail />} />

            {/* 404 Page */}
            <Route path="*" element={<h2 className="text-center py-20">404 — Page Not Found</h2>} />

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
