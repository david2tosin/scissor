import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <section id="hero"
   className="w-full flex-center flex-col">
      <h1>
        {" "}
        Optimize Your Online Experience with Our <br />
        Advanced{" "}
        <span className="blue-text">
          <u>URL Shortening</u>
        </span>{" "}
        Solution
      </h1>
      <p>
        Personalize your shortened URLs to align with your brand identity.
        Utilize custom slugs, branded links, and domain customization options to
        reinforce your brand presence and enhance user engagement.
      </p>
      <div id="hero-btns">
        <Link href='/register'>
          <button className="">Sign Up</button>
        </Link>
        <button className="">Learn more</button>
      </div>
      <div id="hero-imgs">
        {/* <img src="/images/Frame 29546.png" alt="" />
        <img src="/images/Group 3.png" alt="" /> */}
      </div>
    </section>
  )
}
