"use client";

import { useState } from "react";
import axios from "axios";

const UrlShortner = () => {
  const [longUrl, setLongUrl] = useState("");
  const [domain, setDomain] = useState("");
  const [alias, setAlias] = useState("");
  const [links, setLinks] = useState<string[]>([]);

  const [shortUrl, setShortUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const accessToken = process.env.NEXT_PUBLIC_BITLY_ACCESS_TOKEN;
      const bitlyUrl = "https://api-ssl.bitly.com/v4/shorten";

      const response = await axios.post(
        bitlyUrl,
        { long_url: longUrl },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const { link } = response.data;

      setLinks((prevLinks) => [...prevLinks, link]);
      setShortUrl(link);
      setLongUrl("");
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full px-4 py-16 bg-slate-800 flex flex-col items-center mx-auto">
      <div className="bg-white rounded-md p-4 lg:p-10">
        <form onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="Paste URL here..."
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className="w-full py-5 border border-blue-500 rounded-xl px-4 text-blue-500 outline-none placeholder:text-blue-500 text-xs"
          />

          <div className="flex flex-col lg:flex-row mt-4 gap-4">
            <input
              type="text"
              placeholder="Choose Domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full py-5 border border-blue-500 rounded-xl px-4 text-blue-500 outline-none placeholder:text-blue-500 text-xs"
            />
            <input
              type="text"
              placeholder="Type Alias here"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              className="w-full py-5 border border-blue-500 rounded-xl px-4 text-blue-500 outline-none placeholder:text-blue-500 text-xs"
            />
          </div>

          <button className="px-4 w-full flex justify-center items-center font-semibold text-sm gap-1 py-3 mt-4 bg-blue-600 text-white rounded-full hover:bg-blue-400 transition-colors">
            <span>{loading ? "loading..." : "Trim URL"}</span>
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3182 10.0032L10.5909 10.6783M1.15777 1.0424L12.9624 11.0878C13.2555 11.3372 13.2654 11.7631 12.9843 12.024V12.024C12.7043 12.284 12.2496 12.2779 11.9805 12.0081C7.90474 7.92323 0.728422 0.707593 1.15777 1.0424Z"
                stroke="white"
              />
            </svg>
          </button>

          {shortUrl && (
            <div className="my-4 border border-blue-500 border-dashed px-4 py-2 rounded-md text-blue-500">
              <p>
                Shortened URL:{" "}
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  {shortUrl}
                </a>
              </p>
            </div>
          )}

          {links.length > 0 ? (
            <div>
              <h2 className="text-blue-500 text-center text-lg font-bold mb-2">
                Previously Shortened Links
              </h2>

              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-semibold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <p className="mt-4 text-xs font-medium text-blue-500 max-w-sm mx-auto">
            By clicking TrimURL, I agree to the{" "}
            <span className="font-bold">Terms of Service, Privacy Policy</span>{" "}
            and Use of Cookies.
          </p>
        </form>
      </div>
    </div>
  );
};
export default UrlShortner;
