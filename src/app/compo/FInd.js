import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";


const Find = () => {
  return (
    <section className="bg-[#0D1B2A] text-white py-12 px-4">
      {/* Email Updates Section */}
      <div className="text-center max-w-7xl mx-auto mb-12 flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold">
            Keep up to date &mdash; Get e-mail updates
          </h2>
          <p className="text-gray-400 mt-2">
            Stay tuned for the latest company news.
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Your e-mail address"
            className="px-4 py-2 w-80 rounded-l-md text-white border-white border bg-transparent"
          />
          <button className="bg-orange-500 px-4 py-2 rounded-r-md font-semibold">
            Sign me up!
          </button>
        </div>
      </div>

      {/* Contact & Support Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          {
            title: "Our offices",
            text: "View our locations around the world and find contact details for your nearest office.",
            link: "Locate the Nearest Office",
            icon: <FaMagnifyingGlassLocation />,
          },
          {
            title: "Drop us a line",
            text: "You can contact us by filling in this form any time you need professional support and guidance.",
            link: "Fill Our Form",
            icon:<MdConnectWithoutContact />,
          },
          {
            title: "Support",
            text: "Learn more about us and find resources that will help you with all of our products.",
            link: "Open a Ticket",
            icon:<MdSupportAgent />,
          },
        ].map((item, index) => (
          <div key={index} className="relative">
            <Image
              src="/logo.png"
              alt={item.title}
              width={300}
              height={300}
              className="w-full opacity-30"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4">
              <p className="text-5xl mb-5">{item.icon}</p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-400 mt-2 px-10">{item.text}</p>
              <Link
                href={"/"}
                className="text-orange-500 font-medium mt-2 inline-block"
              >
                {item.link}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Find;
