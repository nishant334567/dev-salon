"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function AllDevs() {
  const router = useRouter(); //hook
  const [devs, setDevs] = useState([]);
  const [loading, setLoading] = useState(true);

  const redirectToDevId = (devId) => {
    router.push(`/dev-details/${devId}`);
  };

  useEffect(() => {
    const fetchDevs = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/dev");
        const data = await res.json();
        setDevs(data.dev || []); // array set karna hai
      } catch (error) {
        console.error("Failed to fetch developers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDevs();
  }, []);

  if (loading) {
    return <p>Loading developers...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Explore Developers
        </h1>

        {devs.length === 0 ? (
          <p className="text-center text-gray-600">No developers found.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devs.map((dev) => (
              <li
                key={dev._id}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {dev.name}
                </h2>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Email:</span> {dev.email}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Experience:</span>{" "}
                  {dev.experience} years
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Charge:</span> {dev.charge}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Tech Stack:</span>{" "}
                  {dev.techStack}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Phone:</span> {dev.phoneNumber}
                </p>
                <div className="flex justify-between">
                  <button
                    onClick={() => redirectToDevId(dev._id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  >
                    View Details
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
