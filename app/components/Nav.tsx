'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "../utils"

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }
  return (
   <nav className="fixed w-full z-50 top-0 left-0 bg-white shadow-md">
    <div className="flex justify-between max-w-7xl mx-auto items-center w-full h-full px-4 py-3">
     <Link href="/" className="flex gap-2 flex-center focus:outline-none focus-visible:ring-4 ring-neutral-600 rounded-sm ring-offset-4 hover:opacity-75 transition-opacity">
        <Image
        src="/logo.svg"
        alt="Scissor"
        width={30}
        height={30}
        className="object-contain"
        />
        <p className="text-2xl font-semibold tracking-wide text-blue-600">
          Scissor
        </p>

      </Link>

      <div className="flex justify-between items-center">
          <div>
            <ul className="hidden sm:flex sm:gap-10">
              <li >
                <Link href='/myurls' className="text-blue-600">My URLs
                </Link>
              </li>
              <li>
                <Link href='#features'>Features</Link>
              </li>
              <li>
                <Link href='#pricing'>Pricing</Link>
              </li>
              <li>
                <Link href='#faqs'>FAQs</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden sm:flex gap-4 font-semibold">
          <button className="text-blue-600 rounded-2xl transition-colors">
            Log in
          </button>

          <Link
            className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-400 transition-colors"
            href="#urlshortner"
          >
            Try for free
          </Link>
        </div>

        <button
          id="menu"
          className="md:hidden focus:outline-none focus-visible:ring-4 ring-neutral-600 rounded-sm ring-offset-4 text-blue-600 hover:text-blue-400 transition-colors"
          onClick={handleNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

     <div
        className={cn(
          "fixed left-0 w-3/4 sm:hidden h-screen -translate-x-full z-50 bg-blue-600 top-0 p-10 ease-in duration-500",
          { "translate-x-0": menuOpen }
        )}
      ></div>

   </nav>
  )
}
export default Nav