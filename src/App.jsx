import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import ClientsPage from "./pages/ClientsPage";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router basename="/aurabrand.tech">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sherbimet" element={<Services />} />
        <Route path="/cmimet" element={<Packages />} />
        <Route path="/klientet" element={<ClientsPage />} />
        <Route path="/kontakti" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
