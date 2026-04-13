import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

const navigate = useNavigate();

const handleLogout = () => {
localStorage.removeItem("role");
navigate("/");
};

return (
<div className="sidebar">

<h2 className="logo">MediFlow AI</h2>

<ul className="menu">

<li>
<Link to="/dashboard">Dashboard</Link>
</li>

<li>
<Link to="/create">Create Case</Link>
</li>

<li>
<Link to="/mycases">My Cases</Link>
</li>

<li>
<Link to="/track">Track Case</Link>
</li>

<li>
<Link to="/lab">Lab Dashboard</Link>
</li>

<li>
<Link to="/chat">Chat</Link>
</li>

<li>
<Link to="/notifications">Notifications</Link>
</li>

</ul>

<button className="logout-btn" onClick={handleLogout}>
Logout
</button>

</div>
);
}

export default Sidebar;