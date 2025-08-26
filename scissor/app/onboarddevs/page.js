"use client";
import { useState } from "react";
// this will have a form to onboard a new dev
export default function OnBoardForm(){
    // return JSX
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");
    const [techStack, setTechStack] = useState("");
    const [charge, setCharge] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    async function addDeveloper() {
       const data = await fetch("/api/dev", {
            method:"POST",body:JSON.stringify({
                name:name,
                email:email,
                experience:experience,
                techStack:techStack,
                charge:charge,
                phoneNumber:phoneNumber
            })
        })
        const devData = await data.json();
        console.log(devData);
    }
    return <div>
        <input placeholder="Enter you name" value={name} onChange={(e)=> setName(e.target.value)}/>
        <input placeholder="Enter you email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="Enter you YOE" value={experience} onChange={(e) => setExperience(e.target.value)}/>
        <input placeholder="Enter you techStack" value={techStack} onChange={(e) => setTechStack(e.target.value)}/>
        <input placeholder="Enter you charge" value={charge} onChange={(e) => setCharge(e.target.value)}/>
        <input placeholder="Enter you phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
        <button onClick={() => {addDeveloper()}}>Add Developer</button>
    </div>
}