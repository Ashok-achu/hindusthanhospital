import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/sitelayout";

// Top navigation pages
import AboutUs from "./toppages/aboutus";
import Academics from "./toppages/academics";
import Testimonials from "./toppages/testimonials";
import Careers from "./toppages/careers";
import Contact from "./toppages/contact";
import News from "./downpages/news";
import Home from "./toppages/home";

// Down navigation pages
import Healthcare from "./downpages/healthcare";
import Specialities from "./downpages/specialities";
import Facilities from "./downpages/Facilities";
import Blog from "./downpages/blog";

// Header
import HeaderGroup from "./components/HeaderGroup";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderGroup />

      {/* Prevent header overlapping content */}
      <div className="pt-28 md:pt-32">
        <Routes>
          <Route element={<SiteLayout />}>

            {/* Top bar links */}
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />

            {/* Bottom navbar links */}
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/specialities" element={<Specialities />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/news" element={<News />} />
            <Route path="/blog" element={<Blog />} />

            

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
