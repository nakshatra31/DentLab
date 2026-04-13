import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CaseContext } from "../CaseContext";

function EditCase(){

const { id } = useParams();
const navigate = useNavigate();
const { cases, updateCase } = useContext(CaseContext);

const caseData = cases.find(c => c.id.toString() === id);

const [patient, setPatient] = useState(caseData.patient);
const [age, setAge] = useState(caseData.age);

const handleUpdate = () => {

updateCase({
...caseData,
patient,
age
});

navigate("/mycases");

};

return(

<div className="dashboard">

<h2 className="page-title">Edit Case</h2>

<div className="form-card">

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

<button 
className="create-btn"
onClick={handleUpdate}
>
Update Case
</button>

</div>

</div>

</div>

)

}

export default EditCase;