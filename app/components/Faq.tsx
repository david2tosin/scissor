"use client";

import Accordion from "./Accordion";

// interface FaqDataProps {
//   question: string;
//   answer: string;
// }

const faqData = [
  {
    question: "How does URL shortening work?",
    answer:
      "URL shortening works by taking a long URL and creating a shorter,condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination",
  },
  {
    question:
      "Is it necessary to create an account to use the URL shortening service?",
    answer:
      "While it is possible to use a URL shortener service without creating an account, it is generally recommended to create an account in order to access additional features like analytics and tracking for your shortened URLs.",
  },
  {
    question: "Are the shortened links permanent? Will they expire?",
    answer: "yes, they are permanent",
  },
  {
    question: "Are there any limitations on the number of URLs I can shorten?",
    answer: "No, there are not",
  },
  {
    question:
      " Can I customize the shortened URLs to reflect my brand or content?",
    answer: "Yes! you absolutely can!",
  },
  {
    question: "Can I track the performance of my shortened URLs?",
    answer: "Yes! but you would have to be a registered user",
  },
  {
    question:
      "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
    answer: "Yes!",
  },
  {
    question: "What is a QR code and what can it do?",
    answer:
      "A QR code, short for Quick Response code, is a two-dimensional barcode that consists of a pattern of black squares arranged on a white background. QR codes can store various types of data, including text, URLs, contact information, Wi-Fi network details, and more. They can be scanned using a smartphone or a dedicated QR code reader, which utilizes the device's camera to capture the code's image.",
  },
  {
    question:
      "Is there an API available for integrating the URL shortening service into my own applications or websites?",
    answer: "Not yet, but it is comming soon!",
  },
];

const Faq = () => {
  return (
    <section className="max-w-5xl mx-auto items-center p-4" id="faqs">
      <h2 className="font-bold text-3xl text-center leading-loose lg:text-4xl">
        FAQs
      </h2>

      <div className="mt-16 mb-24 space-y-4">
        {faqData.map((faq, index) => {
          const { question, answer } = faq;

          return <Accordion key={index} question={question} answer={answer} />;
        })}
      </div>
    </section>
  );
};
export default Faq;
