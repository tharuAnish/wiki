import Link from "next/link"
import Search from "./Search"

function Navbar() {
  return (
    <nav className="text-center w-full bg-stone-50  mb-3   shadow-md rounded-xl p-6">
      <h1 className="text-4xl font-semibold pb-2 text-stone-700">
        <Link href="/">InfoVerse</Link>
      </h1>
      <Search />
    </nav>
  )
}

export default Navbar
