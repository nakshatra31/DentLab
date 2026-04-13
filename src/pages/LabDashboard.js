import React, { useContext, useState } from "react";
import { CaseContext } from "../CaseContext";

function LabDashboard(){

const { cases, updateStatus } = useContext(CaseContext);

const [showPopup, setShowPopup] = useState(false);
const [currentId, setCurrentId] = useState(null);
const [reason, setReason] = useState("");

const handleHold = (id) => {
setCurrentId(id);
setShowPopup(true);
};

const submitHold = () => {
updateStatus(currentId,"On Hold",reason);
setShowPopup(false);
};

return(

<div className="dashboard">

<h2 className="page-title">Lab Dashboard</h2>

<div className="lab-card">

<table className="lab-table">

<thead>

<tr>
<th>Case ID</th>
<th>Patient</th>
<th>Age</th>
<th>Status</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{cases.map(c => (

<tr key={c.id}>

<td>{c.id}</td>
<td>{c.patient}</td>
<td>{c.age}</td>

<td>
<span className={`status ${c.status?.toLowerCase().replace(" ","-")}`}>
{c.status}
</span>
</td>

<td>

<button 
className="accept"
onClick={()=>updateStatus(c.id,"In Process")}
>
Accept
</button>

<button 
className="hold"
onClick={()=>handleHold(c.id)}
>
Hold
</button>

<button 
className="reject"
onClick={()=>updateStatus(c.id,"Rejected")}
>
Reject
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>


{showPopup && (

<div className="popup">

<div className="popup-box">

<h3>Hold Reason</h3>

<input 
value={reason}
onChange={(e)=>setReason(e.target.value)}
/>

<button onClick={submitHold}>
Submit
</button>

</div>

</div>

)}

</div>

)

}

export default LabDashboard;