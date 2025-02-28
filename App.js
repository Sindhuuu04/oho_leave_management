import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoleSelection from "./pages/RoleSelection"; // New Role Selection Page
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import LeaveApplication from "./pages/LeaveApplication";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [role, setRole] = useState(null); // No role selected initially

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Role Selection Page */}
        <Route path="/" element={<RoleSelection setRole={setRole} />} />

        {/* Dashboard Route Based on Role */}
        <Route
          path="/dashboard"
          element={role === "admin" ? <AdminDashboard /> : <Dashboard />}
        />

        <Route path="/apply-leave" element={<LeaveApplication />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
