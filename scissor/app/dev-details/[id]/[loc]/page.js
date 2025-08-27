"use client";
import { useParams } from "next/navigation";

export default function Location() {
  const check = useParams();
  console.log(check);
  return <p> hello location</p>;
}
