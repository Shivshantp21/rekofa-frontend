"use client";
import Button from "@/app/compo/Button";
import StickyTimeline from "@/app/compo/History";
import ParallaxSection from "@/app/compo/Parallax";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiGearHammer } from "react-icons/gi";
export default function AboutSection() {
  return (
    <div>
      <section className="max-w-7xl px-14 py-20 flex justify-between items-center mx-auto">
        {/* Left side - images and experience */}
        <div className="flex flex-col gap-6 relative">
          <div className=" absolute -top-57 rounded-[20px] overflow-hidden w-[280px] h-[180px] left-[-56px]">
            <Image
              src="/abt.jpg"
              alt="Robots welding"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute rounded-[20px] overflow-hidden w-[320px] h-[440px] -top-35 -left-[-130px]">
            <Image
              src="/about.jpeg"
              alt="Engineer with clipboard"
              width={400}
              height={400}
              className="w-full h-full object-cover border-white border-8 rounded-4xl"
            />
          </div>

          <div className="absolute -top-[220px] left-[230px]  p-4 flex gap-3 ">
            <p className="text-orange-500 font-bold text-5xl">25+</p>
            <p className="text-xl">Year Of Experience</p>
          </div>
        </div>

        {/* Right side - text content */}
        <div className="max-w-[600px] flex flex-col gap-6">
          <div>
            <p className="uppercase text-sm tracking-widest text-orange-500 font-semibold">
              ⚙️ About Us
            </p>
            <h2 className="text-5xl leading-snug">
              Building quality through{" "}
              <span className="text-gray-800 font-bold">
                industrial innovation
              </span>
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              At the heart of our operations is a commitment to delivering
              superior products through cutting-edge technology and innovative
              processes.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-xl text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-orange-500">
                {" "}
                <GiGearHammer />
              </span>
              Sustainable Manufacturing
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500">
                <GiGearHammer />
              </span>
              Advanced Automation
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500">
                <GiGearHammer />
              </span>
              Efficient Production Processes
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500">
                <GiGearHammer />
              </span>
              Reliable Delivery Services
            </div>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <button
              onClick={() => router.push("/")}
              className="relative overflow-hidden bg-orange-500 py-4 px-8 text-white flex items-center gap-4 group transition-all duration-500"
            >
              <span className="relative z-10">Contact Us</span>
              <FaArrowRightLong className="relative z-10 transition-transform duration-300 group-hover:rotate-0 rotate-[-45deg]" />
              <span className="absolute inset-0 bg-black scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>
            </button>

            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
                4.9
              </p>
              <p className="text-yellow-500">★★★★★</p>
              <p className="text-xs text-gray-500">15.5K Genuine Rating</p>
            </div>
          </div>
        </div>
      </section>

      <ParallaxSection/>

      <StickyTimeline/>
    </div>
  );
}
