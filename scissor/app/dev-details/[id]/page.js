// this fetches the data and shows the details of the dev with id =>dev-id
//prompt - we will be getting id from url params, use that dev id to make get request to
// /api/dev/xyz
// call this api in useEffect()
// based on the data you rceicve, make the front end.
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function DevDetails() {
  const param = useParams();
  const [dev, setDev] = useState({});
  //console.log(param);
  useEffect(() => {
    if (!param.id) return;

    const fetchDev = async () => {
      try {
        const res = await fetch(`/api/dev/${param.id}`);
        const data = await res.json();
        setDev(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching developer:", error);
      }
    };

    fetchDev();
  }, []); //ek he baar chalega

  return (
    <div>
      <h2>Developer Details</h2>
      <p> Name :{dev.name}</p>
      <p> experience :{dev.experience}</p>
      <p> phoneNumber :{dev.phoneNumber}</p>
      <p> techStack :{dev.techStack}</p>
      <p> email :{dev.email}</p>
      <p> charge :{dev.charge}</p>
    </div>
  );
}
