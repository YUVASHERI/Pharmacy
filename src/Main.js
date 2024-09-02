import React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./SighnUp";
import Login from "./Login";
import Dashboard from "./Dashboard";
import InventoryForm from "./Inventory";

function Main(){
    return(
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/InventoryForm" element={<InventoryForm />} />
      </Routes>
    </div>
  </Router>
    );
}
export default Main;