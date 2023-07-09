import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-neutral-800 bg-slate-100">
      <div className="w-full px-4 py-10 bg-slate-800 flex flex-col items-center">
        <h1 className="font-bold text-2xl lg:text-4xl text-center text-neutral-100 leading-loose">
          Revolutionizing Link Optimization
        </h1>
        <button className="px-4 py-2 mt-4 bg-blue-600 text-white rounded-full hover:bg-blue-400 transition-colors">
          Get Started
        </button>
      </div>

      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-6 sm:px-8 px-5 py-10 mx-auto">
        <div className="flex flex-col gap-1 row-span-2 order-last md:order-first">
          <Link
            href="/"
            className="flex gap-2 flex-center focus:outline-none focus-visible:ring-4 ring-neutral-600 rounded-sm ring-offset-4 hover:opacity-75 transition-opacity"
          >
            <Image
              src="/logof.svg"
              alt="Scissor"
              width={24}
              height={24}
              className="object-contain"
            />
            <p className="text-2xl font-semibold tracking-wide">Scissor</p>
          </Link>

          <div className="flex gap-3">
            <Link href="#" className="hover:opacity-75">
              <Image
                src="/twitter.svg"
                height={22}
                width={22}
                alt="twitter logo"
              />
            </Link>
            <Link href="#" className="hover:opacity-75">
              <Image
                src="/ig.svg"
                height={22}
                width={22}
                alt="instagram logo"
              />
            </Link>
            <Link href="#" className="hover:opacity-75">
              <Image
                src="/linkedin.svg"
                height={22}
                width={22}
                alt="linkedin logo"
              />
            </Link>
            <Link href="#" className="hover:opacity-75">
              <Image
                src="/facebook.svg"
                height={22}
                width={22}
                alt="facebook logo"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-sm lg:text-base ">
          <h4 className="font-semibold ">Why Scissor</h4>
          <Link className="font-medium hover:opacity-75" href="#">
            Scissor 101
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Integrations & API
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Pricing
          </Link>
        </div>

        <div className="flex flex-col gap-1 text-sm lg:text-base ">
          <h4 className="font-semibold ">Resources</h4>
          <Link className="font-medium hover:opacity-75" href="#">
            Library
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Developers
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            App Connectors
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Support
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Trust Center
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Browser Extension
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Mobile App
          </Link>
        </div>

        <div className="flex flex-col gap-1 text-sm lg:text-base ">
          <h4 className="font-semibold ">Solutions</h4>
          <Link className="font-medium hover:opacity-75" href="#">
            Social Media
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Digital Marketing
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Customer Service
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            For Developers
          </Link>
        </div>

        <div className="flex flex-col gap-1 text-sm lg:text-base ">
          <h4 className="font-semibold ">Features</h4>
          <Link className="font-medium hover:opacity-75" href="#">
            Branded Links
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Mobile Links
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Campaign
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Management & <br />
            Analytics
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            QR Code generation
          </Link>
        </div>

        <div className="flex flex-col gap-1 text-sm lg:text-base ">
          <h4 className="font-semibold ">Products</h4>
          <Link className="font-medium hover:opacity-75" href="#">
            Link Management
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            QR Codes
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Link-in-bio
          </Link>
        </div>

        <div className="flex flex-col gap-1 text-sm lg:text-base ">
          <h4 className="font-semibold ">Legal</h4>
          <Link className="font-medium hover:opacity-75" href="#">
            Privacy Policy
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Cookie Policy
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Terms of Service
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Acceptable Use Policy
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Code of Conduct
          </Link>
        </div>

        <div className="flex flex-col gap-1 text-sm lg:text-base ">
          <h4 className="font-bold ">Resources</h4>
          <Link className="font-medium hover:opacity-75" href="#">
            About Scissor
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Careers
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Partners
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Press
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Contact
          </Link>
          <Link className="font-medium hover:opacity-75" href="#">
            Reviews
          </Link>
        </div>
      </div>

      <div className="p-3 md:flex md:justify-end">
        <span className="text-sm font-bold">
          Terms of service | Security | Scissor 2023
        </span>
      </div>
    </footer>
  );
};
export default Footer;
