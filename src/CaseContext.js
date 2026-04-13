import React, { createContext, useState, useEffect } from "react";

export const CaseContext = createContext();

export const CaseProvider = ({ children }) => {

const [cases, setCases] = useState(
JSON.parse(localStorage.getItem("cases")) || []
);

const [notifications, setNotifications] = useState(
JSON.parse(localStorage.getItem("notifications")) || []
);


useEffect(()=>{
localStorage.setItem("cases", JSON.stringify(cases));
},[cases]);

useEffect(()=>{
localStorage.setItem("notifications", JSON.stringify(notifications));
},[notifications]);


const addCase = (newCase) => {

setCases([...cases, newCase]);

setNotifications([
...notifications,
{ text: `New case created for ${newCase.patient}` }
]);

};


const updateStatus = (id, status, reason="") => {

setCases(
cases.map(c =>
c.id === id ? { ...c, status, reason } : c
)
);

setNotifications([
...notifications,
{ text: `Case ${id} updated to ${status}` }
]);

};


const updateCase = (updatedCase) => {

setCases(
cases.map(c =>
c.id === updatedCase.id ? updatedCase : c
)
);

};


const deleteCase = (id) => {

setCases(
cases.filter(c => c.id !== id)
);

setNotifications([
...notifications,
{ text: `Case ${id} deleted` }
]);

};


return (
<CaseContext.Provider value={{
cases,
addCase,
updateStatus,
updateCase,
deleteCase,
notifications
}}>
{children}
</CaseContext.Provider>
);

};