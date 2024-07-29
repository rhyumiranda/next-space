import React from "react";

export default function LoadingUser() {
  return (
    <div className="relative">
      <div className="bg-zinc-900 min-w-full min-h-60"></div>
      <div className="m-auto absolute -translate-x-2/4 -translate-y-2/4 left-[50%] md:left-[15%] top-[100% rounded-full bg-zinc-900 w-[200px] h-[200px] z-5" />
      <div className="m-auto absolute -translate-x-2/4 -translate-y-2/4 left-[50%] md:left-[15%] top-[100% rounded-full bg-zinc-600 w-[200px] h-[200px] animate-pulse z-4" />
      <div className="flex flex-col md:absolute md:left-[25%] md:mt-10 md:my-0 md:mb-0 md:p-0 my-24 p-4 text-center md:text-start">
        <div className="bg-zinc-700 w-60 h-8 rounded-full animate-pulse mb-4"></div>
        <div className="bg-zinc-700 w-96 h-6 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
