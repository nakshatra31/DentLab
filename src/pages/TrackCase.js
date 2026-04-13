import React, { useContext } from "react";
import { CaseContext } from "../CaseContext";

function TrackCase(){

const { cases } = useContext(CaseContext);

return(

<div className="dashboard">

<h2 className="page-title">Track Case</h2>

<div className="lab-card">

<table className="lab-table">

<thead>
<tr>
<th>ID</th>
<th>Patient</th>
<th>Status</th>
<th>Reason</th>
</tr>
</thead>

<tbody>

{cases.map(c => (

<tr key={c.id}>

<td>{c.id}</td>
<td>{c.patient}</td>

<td>
<span className={`status ${c.status?.toLowerCase().replace(" ","-")}`}>
{c.status}
</span>
</td>

<td>{c.reason}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}

export default TrackCase;