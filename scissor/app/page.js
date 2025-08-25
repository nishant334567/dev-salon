import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 shadow-md backdrop-blur-md sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png" // apna logo yaha daalna (public/logo.png me)
            alt="Scissor Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-indigo-600">Scissor</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-lg text-indigo-600 font-medium hover:bg-indigo-100 transition">
            Sign In
          </button>
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
            Sign Out
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
          Welcome to <span className="block">Scissor – The Developer Hub</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          A community-driven hub where developers connect, collaborate, and
          grow. Find the right talent, showcase your skills, and build the
          future together.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition">
            Explore our developers
          </button>
        </div>
      </section>
    </main>
  );
}
