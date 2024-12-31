"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const Search = () => {
  const [search, setSearch] = useState("")
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    setSearch("")
    router.push(`/${search}/`)
  }
  return (
    <form className=" flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-full w-full px-3 py-1 border"
      />
      <button className="text-xl flex justify-center opacity-60  rounded-full p-1">
        🔍
      </button>
    </form>
  )
}

export default Search
