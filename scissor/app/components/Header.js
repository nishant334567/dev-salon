// header of our app
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data: session} = useSession();
  const router = useRouter();
  const redirectToOnboardDev = () => {
    router.push("/onboarddevs");
  };

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">
        <div className="mx-auto w-full max-w-7xl px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Scissor Logo"
              width={40}
              height={40}
              className="drop-shadow-sm"
            />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
              Scissor
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                redirectToOnboardDev();
              }}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium shadow-sm hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70"
              aria-label="Add Developer"
            >
              <span className="-mt-[1px]">+</span>
              <span>Add Developer</span>
            </button>

            {!session ? (
              <button
                onClick={() => {
                  signIn();
                }}
                className="px-4 py-2 rounded-lg text-indigo-700 font-medium bg-white/70 ring-1 ring-black/5 hover:bg-indigo-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
              >
                Sign In
              </button>
            ) : (
              <>
                <div className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/70 ring-1 ring-black/5 shadow-sm">
                  {session?.user?.image && (
                    <Image
                      src={session.user.image}
                      alt={`${session?.user?.name ?? "User"} Avatar`}
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {session?.user?.name ?? "Signed In"}
                  </span>
                </div>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow-sm hover:bg-indigo-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      
    </>
  );
}
