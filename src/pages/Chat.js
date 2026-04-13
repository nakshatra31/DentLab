import React, { useState } from "react";

function Chat(){

const [message, setMessage] = useState("");
const [messages, setMessages] = useState([]);

const sendMessage = () => {

if(message.trim() === "") return;

setMessages([...messages,{text:message,sender:"doctor"}]);
setMessage("");

};

return(

<div className="dashboard">

<h2 className="page-title">Chat</h2>

<div className="chat-card">

<div className="chat-box">

{messages.map((m,index)=>(
<div 
key={index}
className={m.sender === "doctor" ? "doctor-msg" : "lab-msg"}
>
{m.text}
</div>
))}

</div>

<div className="chat-input">

<input 
type="text"
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Type message..."
/>

<button onClick={sendMessage}>
Send
</button>

</div>

</div>

</div>

)

}

export default Chat;