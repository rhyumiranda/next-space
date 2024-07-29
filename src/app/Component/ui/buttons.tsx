"use client";
import { log } from "console";
import { signOut, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <Link href={"/dashboard"}>
        <Image
          src={session.user?.image ?? "/vercel.svg"}
          width={32}
          height={32}
          alt="User avatar"
        />
      </Link>
    );
  }

  return <button onClick={() => signIn()} className="border px-4 py-2 text-md uppercase text-black bg-white">Sign In</button>;
}

export function SignOutButton() {
  return <button onClick={() => signOut()} className="border px-4 py-2 text-md uppercase">Sign Out</button>;
}
