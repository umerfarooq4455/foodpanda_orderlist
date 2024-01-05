import { Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/layout/Footer.jsx";
import About from "./components/pages/About.jsx";
import Contactus from "./components/pages/Contactus.jsx";
import Terms from "./components/pages/Terms.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
