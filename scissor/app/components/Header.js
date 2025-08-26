// header of out app
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const redirectToOnboardDev = () => {
    router.push("/onboarddevs");
  };

  return (
    <>
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
          <button
            onClick={() => {
              redirectToOnboardDev();
            }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white "
          >
            Add Developer
          </button>
          {!session && (
            <button
              onClick={() => {
                signIn();
              }}
              className="px-4 py-2 rounded-lg text-indigo-600 font-medium hover:bg-indigo-100 transition"
            >
              Sign In
            </button>
          )}
          {session && (
            <button
              onClick={() => {
                signOut();
              }}
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              Sign Out
            </button>
          )}
        </div>
      </nav>
      ;
    </>
  );
}
