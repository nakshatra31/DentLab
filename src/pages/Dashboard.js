import React, { useContext } from "react";
import { CaseContext } from "../CaseContext";

function Dashboard(){

const { cases } = useContext(CaseContext);

const total = cases.length;
const pending = cases.filter(c => c.status === "Pending").length;
const process = cases.filter(c => c.status === "In Process").length;
const completed = cases.filter(c => c.status === "Completed").length;

return(

<div className="dashboard">

<h2 className="page-title">Dashboard</h2>

{/* Cards */}

<div className="dashboard-cards">

<div className="dash-card">
<h3>{total}</h3>
<p>Total Cases</p>
</div>

<div className="dash-card">
<h3>{pending}</h3>
<p>Pending</p>
</div>

<div className="dash-card">
<h3>{process}</h3>
<p>In Process</p>
</div>

<div className="dash-card">
<h3>{completed}</h3>
<p>Completed</p>
</div>

</div>


{/* Recent Cases */}

<div className="lab-card">

<h3>Recent Cases</h3>

<table className="lab-table">

<thead>
<tr>
<th>Case ID</th>
<th>Patient</th>
<th>Status</th>
</tr>
</thead>

<tbody>

{cases.slice(-5).map(c => (

<tr key={c.id}>
<td>{c.id}</td>
<td>{c.patient}</td>
<td>{c.status}</td>
</tr>

))}

</tbody>

</table>

</div>

</div>

)

}

export default Dashboard;