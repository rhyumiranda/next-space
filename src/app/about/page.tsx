import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'About us',
  description: 'About NextSpace'
};

export default function Blog() {
  return (
    <section className="min-h-full min-w-screen min-h-screen">
      <article className="w-full p-12">
        <h1 className="text-[2.986rem] uppercase font-bold">About us</h1>
        <p className="text-lg font-normal">We are a social media company that wants to bring people together!</p>
      </article>
      <Image sizes="(max-width: 600px) 300px" src={'/Diverse.jpg'} width={1600} height={898} style={{ width: '100%', height: 'auto' }} alt="Diverse happy four people laughing while sitting on a couch photograph by rawpixel" priority/>
    </section>
  )
}
