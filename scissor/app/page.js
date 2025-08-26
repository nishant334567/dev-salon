"use client";

import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import Header from "./components/Header";

export default function Home() {
  const router = useRouter(); //hook
  const { data: session, status } = useSession();
  const redirectToHome = () => {
    router.push("/exploreourdevs");
  };

  return (
    <>
      <Header></Header>
      <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-24 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Welcome to{" "}
            <span className="block">Scissor – The Developer Hub</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
            A community-driven hub where developers connect, collaborate, and
            grow. Find the right talent, showcase your skills, and build the
            future together.
          </p>

          <div className="mt-10 flex gap-4">
            <button
              onClick={() => {
                redirectToHome();
              }}
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
            >
              Explore our developers
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
