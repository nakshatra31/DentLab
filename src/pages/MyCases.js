import React, { useContext, useState } from "react";
import { CaseContext } from "../CaseContext";
import { Link } from "react-router-dom";

function MyCases(){

const { cases, deleteCase } = useContext(CaseContext);

const [search, setSearch] = useState("");
const [statusFilter, setStatusFilter] = useState("");

const filteredCases = cases.filter(c =>

c.patient?.toLowerCase().includes(search.toLowerCase()) &&
(statusFilter === "" || c.status === statusFilter)

);

return(

<div className="dashboard">

<h2 className="page-title">My Cases</h2>

<div className="filter-bar">

<input 
type="text"
placeholder="Search by patient name..."
className="search-box"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<select 
className="filter-dropdown"
value={statusFilter}
onChange={(e)=>setStatusFilter(e.target.value)}
>

<option value="">All Status</option>
<option value="Pending">Pending</option>
<option value="In Process">In Process</option>
<option value="Completed">Completed</option>
<option value="Rejected">Rejected</option>
<option value="On Hold">On Hold</option>

</select>

</div>

<div className="lab-card">

<table className="lab-table">

<thead>
<tr>
<th>Case ID</th>
<th>Patient</th>
<th>Age</th>
<th>Status</th>
<th>Reason</th>
<th>View</th>
<th>Edit</th>
<th>Delete</th>
</tr>
</thead>

<tbody>

{filteredCases.length === 0 ? (

<tr>
<td colSpan="8">No Cases Found</td>
</tr>

) : (

filteredCases.map(c => (

<tr key={c.id}>

<td>{c.id}</td>
<td>{c.patient}</td>
<td>{c.age}</td>

<td>
<span className={`status ${c.status?.toLowerCase().replace(" ","-")}`}>
{c.status}
</span>
</td>

<td>{c.reason}</td>

<td>
<Link to={`/case/${c.id}`}>
<button className="view-btn">View</button>
</Link>
</td>

<td>
<Link to={`/edit/${c.id}`}>
<button className="edit-btn">Edit</button>
</Link>
</td>

<td>
<button 
className="delete-btn"
onClick={()=>{
if(window.confirm("Delete this case?")){
deleteCase(c.id)
}
}}
>
Delete
</button>
</td>

</tr>

))

)}

</tbody>

</table>

</div>

</div>

)

}

export default MyCases;