'use client';

import Image from "next/image";

const Section = ({ title, quote, timeline }) => (
  <section className="flex snap-start w-full h-screen max-w-7xl mx-auto px-6">
    {/* LEFT - Fixed Content */}
    <div className="w-1/2 hidden lg:flex flex-col justify-center sticky top-0 h-screen pr-12 py-20 bg-white z-10">
      <p className="text-xl font-semibold">{title}</p>
      <h2 className="text-4xl font-bold mt-2 leading-tight">
        Growth into a<br />solution company
      </h2>
      <blockquote className="text-gray-600 text-lg mt-10 relative pl-10">
        <span className="absolute left-0 top-0 text-5xl text-gray-300 leading-none">“</span>
        {quote}
      </blockquote>
    </div>

    {/* RIGHT - Scrollable Timeline */}
    <div className="w-full lg:w-1/2 h-full overflow-y-auto py-20 relative no-scrollbar">
      <div className="absolute left-3 top-0 h-full w-px bg-gray-300 z-0" />
      <div className="space-y-20 relative z-10 pl-10 pr-4">
        {timeline.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-4 border-red-500 shadow-md" />
            <h3 className="text-2xl font-bold mb-4">{item.year}</h3>
            <ul className="text-gray-800 text-base space-y-2">
              <li>{item.text}</li>
            </ul>
            <div className="mt-4 rounded-xl overflow-hidden max-w-md">
              <Image
                src={item.image}
                alt="Timeline Event"
                width={600}
                height={400}
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