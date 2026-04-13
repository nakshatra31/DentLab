import React from "react";
import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateCase from "./pages/CreateCase";
import MyCases from "./pages/MyCases";
import TrackCase from "./pages/TrackCase";
import LabDashboard from "./pages/LabDashboard";
import Chat from "./pages/Chat";
import Notifications from "./pages/Notifications";
import CaseDetails from "./pages/CaseDetails";
import EditCase from "./pages/EditCase";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CaseProvider } from "./CaseContext";

import "./styles/style.css";


function Layout(){

const location = useLocation();
const role = localStorage.getItem("role");

return(

<div className="app">

{/* Hide sidebar on login page */}

{location.pathname !== "/" && role && <Sidebar />}

<div className={location.pathname === "/" ? "login-content" : "main-content"}>

<Routes>

<Route path="/" element={<Login />} />

<Route 
path="/dashboard" 
element={role ? <Dashboard /> : <Login />} 
/>

<Route 
path="/create" 
element={role ? <CreateCase /> : <Login />} 
/>

<Route 
path="/mycases" 
element={role ? <MyCases /> : <Login />} 
/>

<Route 
path="/track" 
element={role ? <TrackCase /> : <Login />} 
/>

<Route 
path="/lab" 
element={role ? <LabDashboard /> : <Login />} 
/>

<Route 
path="/chat" 
element={role ? <Chat /> : <Login />} 
/>

<Route 
path="/notifications" 
element={role ? <Notifications /> : <Login />} 
/>

<Route 
path="/case/:id" 
element={role ? <CaseDetails /> : <Login />} 
/>

<Route 
path="/edit/:id" 
element={role ? <EditCase /> : <Login />} 
/>

</Routes>

</div>

</div>

)

}

function App() {

return (

<CaseProvider>

<BrowserRouter>

<Layout/>

</BrowserRouter>

</CaseProvider>

);

}

export default App;