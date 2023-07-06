import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
   <nav className="fixed left-0 top-0 w-full z-10 flex justify-between items-center bg-slate-300 py-4 px-8">
     <Link href="/" className="flex gap-2 flex-center">
        <Image
        src="/public/logo.png"
        alt="Scissor"
        width={30}
        height={30}
        className="object-contain"
        />
        <p className="text-lg font-semibold tracking-wide text-cyan-600 max-sm:hidden">
          Scissor
        </p>
      </Link>


   </nav>
  )
}
export default Nav