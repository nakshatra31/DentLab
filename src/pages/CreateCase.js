import React, { useState, useContext } from "react";
import { CaseContext } from "../CaseContext";

function CreateCase() {

const { addCase } = useContext(CaseContext);

const [showAI, setShowAI] = useState(false);
const [patient, setPatient] = useState("");
const [age, setAge] = useState("");
const [gender, setGender] = useState("");

// NEW FILE STATES
const [scanFile, setScanFile] = useState(null);
const [reportFile, setReportFile] = useState(null);

const handlePreview = () => {
setShowAI(true);
};

const handleCreate = () => {

const newCase = {
id: Date.now(),
patient,
age,
gender,
status: "Pending",
reason: "",
scanFile,
reportFile
};

addCase(newCase);

alert("Case Created Successfully");

setShowAI(false);
setPatient("");
setAge("");
setGender("");
setScanFile(null);
setReportFile(null);

};

return (

<div className="dashboard">

<h2 className="page-title">Create New Case</h2>

{/* Patient Details */}

<div className="form-card">
<h3>Patient Details</h3>

<div className="form-row">

<input 
type="text" 
placeholder="Patient Name"
value={patient}
onChange={(e)=>setPatient(e.target.value)}
/>

<input 
type="number" 
placeholder="Age"
value={age}
onChange={(e)=>setAge(e.target.value)}
/>

<select 
value={gender}
onChange={(e)=>setGender(e.target.value)}
>
<option>Gender</option>
<option>Male</option>
<option>Female</option>
</select>

</div>

</div>


{/* Case Details */}

<div className="form-card">
<h3>Case Details</h3>

<div className="form-row">

<select>
<option>Zirconia</option>
<option>Metal</option>
</select>

<select>
<option>Crown</option>
<option>Bridge</option>
</select>

<select>
<option>Upper</option>
<option>Lower</option>
</select>

</div>

</div>


{/* Upload */}

<div className="form-card">
<h3>Upload Files</h3>

<div className="form-row">

<input 
type="file"
onChange={(e)=>setScanFile(e.target.files[0])}
/>

<input 
type="file"
onChange={(e)=>setReportFile(e.target.files[0])}
/>

</div>

</div>


<div className="button-container">
<button className="create-btn" onClick={handlePreview}>
Preview Case
</button>
</div>


{/* AI Recommendation */}

{showAI && (

<div className="ai-card">

<h3>AI Recommendation</h3>

<div className="ai-row">

<div className="ai-box">
<h4>Recommended Material</h4>
<p>Zirconia</p>
</div>

<div className="ai-box">
<h4>Recommended Lab</h4>
<p>Chennai Dental Lab</p>
</div>

<div className="ai-box">
<h4>Confidence</h4>
<p>92%</p>
</div>

</div>

<button 
className="confirm-btn"
onClick={handleCreate}
>
Create Case
</button>

</div>

)}

</div>

)

}

export default CreateCase;