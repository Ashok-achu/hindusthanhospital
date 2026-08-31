import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";

// 🔹 Header
import HeaderGroup from "./components/HeaderGroup";

// 🔹 Layout Wrapper
import SiteLayout from "./layouts/sitelayout";

// 🔹 Top Navigation Pages
const Home = lazy(() => import("./toppages/home"));
const Mettupalayam = lazy(() => import("./toppages/Mettupalayam"));
const Doctor = lazy(() => import("./downpages/healthcare"));
const AboutUs = lazy(() => import("./toppages/aboutus"));
const Academics = lazy(() => import("./toppages/academics"));
const Testimonials = lazy(() => import("./toppages/testimonials"));
const Careers = lazy(() => import("./toppages/careers"));
const Contact = lazy(() => import("./toppages/contact"));
const Gallery = lazy(() => import("./toppages/Media"));

// 🔹 About Us Subpages
const Abouttrust = lazy(() => import("./toppages/abouttrust"));
const Mission = lazy(() => import("./toppages/Mission"));
const Milestones = lazy(() => import("./toppages/Milestones"));
const Appointment = lazy(() => import("./toppages/appointment"));

// 🔹 Bottom Navigation Pages

const Specialities = lazy(() => import("./downpages/specialities"));
const FacilitiesPage = lazy(() => import("./downpages/Facilities"));
const Blog = lazy(() => import("./downpages/blog"));
const News = lazy(() => import("./downpages/news"));

// 🔹 Facilities Subpages
const Ambulance = lazy(() => import("./facilities/Ambulance"));
const Birthing = lazy(() => import("./facilities/Birthing"));
const BloodBank = lazy(() => import("./facilities/BloodBank"));
const Insurance = lazy(() => import("./facilities/Insurance"));
const LabServices = lazy(() => import("./facilities/LabServices"));
const RadiologyServices = lazy(() => import("./facilities/RadiologyServices"));

// ✅ ADD THESE (as per your requirement)
const MHC = lazy(() => import("./facilities/MHC"));
const Rooms = lazy(() => import("./facilities/Rooms"));
const Canteen = lazy(() => import("./facilities/Canteen"));
const Pharmacy = lazy(() => import("./facilities/Pharmacy"));
const Courses = lazy(() => import("./academics/Courses"));



// 🔹 Dynamic Department Detail Page
const DepartmentDetail = lazy(() => import("./departments/DepartmentDetail"));




export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />


      <Suspense fallback={<div className="grid min-h-[40vh] place-items-center text-sm font-semibold text-[#0E5260]">Loading...</div>}>
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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/appointment" element={<Appointment />} />

            {/* ABOUT SUB ROUTES */}
            <Route path="/abouttrust" element={<Abouttrust />} />
            <Route path="/mission" element={<Mission />} />
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
            <Route path="/facilities/mhc" element={<MHC />} />
            <Route path="/facilities/rooms" element={<Rooms />} />
            <Route path="/facilities/canteen" element={<Canteen />} />
            <Route path="/facilities/pharmacy" element={<Pharmacy />} />

            {/* ✅ ACADEMICS */}
            <Route path="/academics/Courses" element={<Courses />} />

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
      </Suspense>
    </BrowserRouter>
  );
}
