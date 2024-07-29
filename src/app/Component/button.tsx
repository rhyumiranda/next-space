'use client'
import { useSession } from "next-auth/react"
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

export function SignIn() {

  const {data: session, status} = useSession();

  if(status === "loading"){
    return <>...</>
  }

  if(status === "authenticated"){
    return <Image src={session.user?.image ?? '/vercels.svg'} width={34} height={34} alt="profile picture"/>
  }

  return (
    <button onClick={() => signIn()}>SignIn</button>
  )
}

export function SignOut() {
  return (
    <div onClick={() => signOut()}>Sign Out</div>
  )
}

