import React, { useContext } from "react";
import { CaseContext } from "../CaseContext";

function Notifications(){

const { notifications } = useContext(CaseContext);

return(

<div className="dashboard">

<h2 className="page-title">Notifications</h2>

<div className="lab-card">

{notifications.length === 0 ? (

<p>No notifications</p>

) : (

notifications.map((n,index)=>(
<div key={index} className="notification">
{n.text}
</div>
))

)}

</div>

</div>

)

}

export default Notifications;