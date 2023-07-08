import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/Nav'

export default function Home() {
  return (
   <>
     {/* hero section */}
     <section  className="mt-[106px]">

        <div className="max-w-5xl mx-auto px-4">
          <h1 className="font-bold text-2xl lg:text-5xl text-center leading-loose">
            Optimize Your Online Experience with Our Advanced{" "}
            <span className="text-blue-600">URL Shortening</span> Solution
          </h1>

          <p className="mt-2 font-medium text-center text-sm lg:text-lg">
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>

          <div className="mt-8 flex justify-center gap-2 ml-10 font-semibold">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-100 transition-colors">
              Sign up
            </button>

            <Link
              href="/"
              className="px-4 py-2 text-blue-600 transition-colors"
            >
              Learn more
            </Link>
          </div>

          <div className="rounded-3xl mx-auto mt-20 lg:w-[500px] border border-blue-400 p-4 lg:p-10">
            {/* Link icon */}
            <div className="flex items-center justify-between">
              <svg
                width="224"
                height="80"
                viewBox="0 0 224 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.9999 23.3334L59.9999 23.3334C62.1886 23.3334 64.3559 23.7645 66.378 24.602C68.4001 25.4396 70.2374 26.6673 71.785 28.2149C73.3327 29.7626 74.5603 31.5999 75.3979 33.622C76.2355 35.6441 76.6666 37.8113 76.6666 40C76.6666 42.1887 76.2355 44.356 75.3979 46.3781C74.5603 48.4002 73.3327 50.2375 71.785 51.7852C70.2374 53.3328 68.4001 54.5605 66.378 55.398C64.3559 56.2356 62.1886 56.6667 59.9999 56.6667H49.9999M29.9999 56.6667H19.9999C17.8112 56.6667 15.644 56.2356 13.6219 55.398C11.5998 54.5605 9.76245 53.3328 8.21481 51.7852C5.0892 48.6595 3.33325 44.4203 3.33325 40C3.33325 35.5798 5.0892 31.3405 8.21481 28.2149C11.3404 25.0893 15.5796 23.3334 19.9999 23.3334H29.9999"
                  stroke="#141414"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.6667 40H53.3334"
                  stroke="#141414"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M122 23.3334L132 23.3334C134.189 23.3334 136.356 23.7645 138.378 24.602C140.4 25.4396 142.237 26.6673 143.785 28.2149C145.333 29.7626 146.56 31.5999 147.398 33.622C148.235 35.6441 148.667 37.8113 148.667 40C148.667 42.1887 148.235 44.356 147.398 46.3781C146.56 48.4002 145.333 50.2375 143.785 51.7852C142.237 53.3328 140.4 54.5605 138.378 55.398C136.356 56.2356 134.189 56.6667 132 56.6667H122M102 56.6667H91.9999C89.8112 56.6667 87.644 56.2356 85.6219 55.398C83.5998 54.5605 81.7624 53.3328 80.2148 51.7852C77.0892 48.6595 75.3333 44.4203 75.3333 40C75.3333 35.5798 77.0892 31.3405 80.2148 28.2149C83.3404 25.0893 87.5796 23.3334 91.9999 23.3334H102"
                  stroke="#141414"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M98.6667 40H125.333"
                  stroke="#141414"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M194 23.3334L204 23.3334C206.189 23.3334 208.356 23.7645 210.378 24.602C212.4 25.4396 214.237 26.6673 215.785 28.2149C217.333 29.7626 218.56 31.5999 219.398 33.622C220.235 35.6441 220.667 37.8113 220.667 40C220.667 42.1887 220.235 44.356 219.398 46.3781C218.56 48.4002 217.333 50.2375 215.785 51.7852C214.237 53.3328 212.4 54.5605 210.378 55.398C208.356 56.2356 206.189 56.6667 204 56.6667H194M174 56.6667H164C161.811 56.6667 159.644 56.2356 157.622 55.398C155.6 54.5605 153.762 53.3328 152.215 51.7852C149.089 48.6595 147.333 44.4203 147.333 40C147.333 35.5798 149.089 31.3405 152.215 28.2149C155.34 25.0893 159.58 23.3334 164 23.3334H174"
                  stroke="#141414"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M170.667 40H197.333"
                  stroke="#141414"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* arrow icon */}
              <svg
                width="41"
                height="12"
                viewBox="0 0 41 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7L1 5ZM41 6L31 0.226497V11.7735L41 6ZM1 7L32 7V5L1 5L1 7Z"
                  fill="#005AE2"
                />
              </svg>

              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 23.3334L60 23.3334C62.1887 23.3334 64.356 23.7645 66.3781 24.602C68.4002 25.4396 70.2375 26.6673 71.7852 28.2149C73.3328 29.7626 74.5605 31.5999 75.398 33.622C76.2356 35.6441 76.6667 37.8113 76.6667 40C76.6667 42.1887 76.2356 44.356 75.398 46.3781C74.5605 48.4002 73.3328 50.2375 71.7852 51.7852C70.2375 53.3328 68.4002 54.5605 66.3781 55.398C64.356 56.2356 62.1887 56.6667 60 56.6667H50M30 56.6667H20C17.8113 56.6667 15.6441 56.2356 13.622 55.398C11.5999 54.5605 9.76257 53.3328 8.21493 51.7852C5.08932 48.6595 3.33337 44.4203 3.33337 40C3.33337 35.5798 5.08932 31.3405 8.21493 28.2149C11.3405 25.0893 15.5798 23.3334 20 23.3334H30"
                  stroke="#141414"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.6666 40H53.3333"
                  stroke="#141414"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="mx-auto text-xs text-center lg:text-md lg:max-w-xs font-medium">
              Seamlessly transform your long URLs into concise and{" "}
              <span className="font-semibold">shareable links</span> with just
              few clicks.
            </p>
          </div>
        </div>

        {/* bottom image */}
        <div className="relative mt-20 w-full h-[93px]">
          <Image
            src="/hero-img.png"
            alt=""
            fill
            className="object-contain z-10"
          />
        </div>
     </section>

   </>
  )
}
