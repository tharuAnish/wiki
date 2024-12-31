"use client" // Error boundaries must be Client Components

import Link from "next/link"
import { useEffect } from "react"

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <section className="flex items-center h-full p-16 ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-red-300 ">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-xl my-6 font-semibold md:text-2xl text-neutral-600">
            Something went wrong!
          </p>

          <Link
            rel="noopener noreferrer"
            href="/"
            className="px-8 py-3  rounded-full border text-gray-200 bg-blue-500"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}
