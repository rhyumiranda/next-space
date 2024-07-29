'use client'

import { useEffect } from "react"

export default function Error({error, reset} : {error: Error; reset: () => void;}) {
  
  useEffect(() => {
    console.error(error);
  }, [error])
  
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen min-w-full">
      <h2 className="text-4xl tracking-wide">Something went wrong!</h2>
      <button className="border-gray-500 border duration-300 px-6 py-2 hover:bg-zinc-800 rounded hover:border-none" onClick={() => reset()}>Try again</button>
    </div>
  )
}
