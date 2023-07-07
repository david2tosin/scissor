import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
   <nav className="w-full mb-16 pt-3">
    <div className="mx-auto flex justify-between items-center bg-slate-300 py-4 px-8">
     <Link href="/" className="flex gap-2 flex-center focus:outline-none focus-visible:ring-4 ring-neutral-600 rounded-sm ring-offset-4 hover:opacity-75 transition-opacity">
        <Image
        src="/public/logo.svg"
        alt="Scissor"
        width={30}
        height={30}
        className="object-contain"
        />
        <p className="text-2xl font-semibold tracking-wide text-blue-600">
          Scissor
        </p>

      </Link>
      <button id="menu" className="lg:hidden focus:outline-none focus-visible:ring-4 ring-neutral-600 rounded-sm ring-offset-4 text-blue-600 hover:text-blue-400 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"      className="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div>
        <ul>
          <li><Link href='/myurls'>My URLs</Link></li>
          <li><Link href='#features'>Features</Link></li>
          <li><Link href='#pricing'>Pricing</Link></li>
          <li><Link href='#faqs'>FAQs</Link></li>
        </ul>
      </div>
    </div>


   </nav>
  )
}
export default Nav