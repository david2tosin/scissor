'use client'
import { useState } from "react"
import Image from "next/image"

interface FaqDataProps {
  question: string;
  answer: string;
}

const Faq = () => {

  const faqData: FaqDataProps[]=[
  {
    "question": "How does URL shortening work?",
    "answer": "URL shortening works by taking a long URL and creating a shorter,condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination"
  },
  {
    "question": "Is it necessary to create an account to use the URL shortening service?",
    "answer": "While it is possible to use a URL shortener service without creating an account, it is generally recommended to create an account in order to access additional features like analytics and tracking for your shortened URLs."
  },
  {
    "question": "Are the shortened links permanent? Will they expire?",
    "answer": "yes, they are permanent"
  },
  {
    "question": "Are there any limitations on the number of URLs I can shorten?",
    "answer": "No, there are not"
  },
  {
    "question": " Can I customize the shortened URLs to reflect my brand or content?",
    "answer": "Yes! you absolutely can!"
  },
  {
    "question": "Can I track the performance of my shortened URLs?",
    "answer": "Yes! but you would have to be a registered user"
  },
  {
    "question": "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
    "answer": "Yes!"
  },
  {
    "question": "What is a QR code and what can it do?",
    "answer": "A QR code, short for Quick Response code, is a two-dimensional barcode that consists of a pattern of black squares arranged on a white background. QR codes can store various types of data, including text, URLs, contact information, Wi-Fi network details, and more. They can be scanned using a smartphone or a dedicated QR code reader, which utilizes the device's camera to capture the code's image."
  },
  {
    "question": "Is there an API available for integrating the URL shortening service into my own applications or websites?",
    "answer": "Not yet, but it is comming soon!"
  }
]
 const [active, setActive] = useState<number | null>(0);

  const handleToggle = (activeId: number | null) => {
    if (active === activeId) {
      setActive(null);
    } else {
      setActive(activeId);
    }
  };
  return (
    <section className="max-w-7xl mx-auto items-center" id="faqs">
      <h2 className="font-bold text-3xl text-center leading-loose lg:text-4xl">FAQs</h2>
      <section id="questions-section">
        {faqData &&
          faqData.map((faq, index) => {
            return (
              <ul className="divide-y divide-blue-200" key={index} onClick={() => handleToggle(index)}>
                <div className="flex justify-between items-center space-y-4 mt-4">
                  <span className='font-medium text-base'>{faq.question}</span>
                  <button>
                    {active === index ? (
                      <Image src="/minus.svg" alt="close" width={22} height={22}/>
                    ) : (
                      <Image src="/plus.svg" alt="open" width={22} height={22} />
                    )}
                  </button>
                </div>
                <li className={active === index ? "active" : ""}>
                  {faq.answer}
                </li>
              </ul>
            );
          })}
      </section>
    </section>
  )
}
export default Faq