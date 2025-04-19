"use client";

import Image from "next/image";

const Section = ({ title, quote, timeline }) => (
  <section className="flex snap-start w-full max-w-7xl mx-auto px-6 h-screen overflow-hidden">
    {/* LEFT - Fixed Content */}
    <div className="w-1/2 hidden lg:flex flex-col justify-center h-screen pr-12 py-20 bg-white z-10 sticky top-0">
      <p className="text-xl font-semibold">{title}</p>
      <h2 className="text-4xl font-bold mt-2 leading-tight">
        Growth into a<br />
        solution company
      </h2>
      <blockquote className="text-gray-600 text-lg mt-10 relative pr-10">
        {quote}
      </blockquote>
    </div>

    {/* RIGHT - Scrollable Timeline */}
    <div className="w-full lg:w-1/2 h-screen overflow-y-scroll py-20 relative custom-scrollbar">
  <div className="pl-7 pr-4 relative z-10 space-y-20">
    <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gray-400 z-0" />
    {timeline.map((item, index) => (
      <div key={index} className="relative">
        <div className="flex items-center text-center gap-3">
          <div className="w-6 h-6 rounded-full bg-white border-4 border-red-500 shadow-md mb-2" />
          <h3 className="text-2xl mb-3 font-bold">{item.year}</h3>
        </div>
        <ul className="text-gray-800 text-base space-y-2 mb-5">
          <li>{item.text}</li>
        </ul>
        <div className="mt-4 ml-5 rounded-xl overflow-hidden">
          <Image
            src={item.image}
            alt="Timeline Event"
            width={500}
            height={350}
            className="rounded-xl"
          />
        </div>
      </div>
    ))}
  </div>
</div>
  </section>
);

export default Section;
