"use client";
import { useSession } from "next-auth/react";

import { signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session?.user?.name);
  if (status === "loading") {
    return <p>loading....</p>;
  }
  return (
    <div>
      {session && session.user && <p> hello {session.user.name}</p>}
      {!session && (
        <button
          onClick={() => {
            signIn();
          }}
        >
          Sign in with google
        </button>
      )}
      {session && (
        <button
          onClick={() => {
            signOut();
          }}
        >
          Sign out with google
        </button>
      )}
    </div>
  );
}
