import {  Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import OurCompany from "./pages/OurCompany";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import BoardOfExecutives from "./pages/BoardOfExecutives";
import DomainExpertise from "./pages/DomainExpertise";
import OurEvents from "./pages/OurEvents";
import Testimonials from "./pages/Testimonials";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-company" element={<OurCompany />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
<Route path="/board-of-executives" element={<BoardOfExecutives />} />
<Route path="/domain-expertise" element={<DomainExpertise />} />
<Route path="/our-events" element={<OurEvents />} />
<Route path="/testimonials" element={<Testimonials />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;