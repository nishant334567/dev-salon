"use client";
import { useState } from "react";

export default function OnBoardForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [techStack, setTechStack] = useState("");
  const [charge, setCharge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  async function addDeveloper() {
    const data = await fetch("/api/dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // added header
      body: JSON.stringify({
        name,
        email,
        experience,
        techStack,
        charge,
        phoneNumber,
      }),
    });
    const devData = await data.json();
    console.log(devData);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Onboard a Developer
        </h2>

        <div className="flex flex-col gap-4">
          <input
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your YOE"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
          <input
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your tech stack"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
          />
          <input
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your charge"
            value={charge}
            onChange={(e) => setCharge(e.target.value)}
          />
          <input
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <button
            onClick={addDeveloper}
            className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add Developer
          </button>
        </div>
      </div>
    </div>
  );
}
