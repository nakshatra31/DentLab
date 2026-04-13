import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

const [role, setRole] = useState("doctor");
const navigate = useNavigate();

const handleLogin = () => {

localStorage.setItem("role", role);

if(role === "doctor"){
navigate("/dashboard");
}else{
navigate("/lab");
}

};

return(

<div className="login-container">

<div className="login-card">

<h2>Login</h2>

<select 
value={role}
onChange={(e)=>setRole(e.target.value)}
>

<option value="doctor">Doctor</option>
<option value="lab">Lab</option>

</select>

<button onClick={handleLogin}>
Login
</button>

</div>

</div>

)

}

export default Login;