import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CaseContext } from "../CaseContext";

function CaseDetails(){

const { id } = useParams();
const { cases } = useContext(CaseContext);

const caseData = cases.find(c => c.id.toString() === id);

if(!caseData){
return <div className="dashboard">Case Not Found</div>;
}

const steps = ["Pending","In Process","On Hold","Completed"];
const currentStep = steps.indexOf(caseData.status);

return(

<div className="dashboard">

<h2 className="page-title">Case Details</h2>

<div className="form-card">

<p><strong>Case ID:</strong> {caseData.id}</p>
<p><strong>Patient:</strong> {caseData.patient}</p>
<p><strong>Age:</strong> {caseData.age}</p>
<p><strong>Status:</strong> {caseData.status}</p>
<p><strong>Reason:</strong> {caseData.reason}</p>

</div>


{/* Timeline */}

<div className="form-card">

<h3>Case Progress</h3>

<div className="timeline">

{steps.map((step,index)=>(

<div 
key={index}
className={`timeline-step ${index <= currentStep ? "active" : ""}`}
>

<div className="circle"></div>
<p>{step}</p>

</div>

))}

</div>

</div>

</div>

)

}

export default CaseDetails;