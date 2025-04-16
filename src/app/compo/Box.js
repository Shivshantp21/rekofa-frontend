"use client";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("mission");

  const content = {
    mission: {
      title: "Our Mission",
      description:
        "Our mission is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.",
      points: [
        "Sustainable Manufacturing Practices",
        "Advanced Technology Integration",
        "Community and Environmental Responsibility",
        "Innovation-Driven Growth",
      ],
      image: "/robot-arm.jpg",
    },
    vision: {
      title: "Our Vision",
      description:
        "Our vision is to lead the industrial sector into a smarter, greener future by constantly innovating and adapting advanced technology into every layer of our production and management systems.",
      points: [
        "Smart Industry Transformation",
        "Automation with Responsibility",
        "Tech-Driven Culture",
        "Sustainable Global Impact",
      ],
      image: "/engineer.jpg",
    },
    value: {
      title: "Our Value",
      description:
        "Our core values revolve around integrity, innovation, and sustainability. We aim to provide value not just through our products, but also by being socially and environmentally responsible.",
      points: [
        "Ethical Manufacturing",
        "Cutting-Edge Innovation",
        "Environmental Commitment",
        "Customer-Centric Focus",
      ],
      image: "/value.jpg",
    },
  };

  return (
    <section className="bg-white rounded-[40px] shadow-md mx-auto max-w-7xl">
      {/* Tab Header */}
      <div className="flex justify-between bg-white rounded-t-[40px] overflow-hidden border-b border-gray-200">
        {Object.keys(content).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex-1 py-6 px-8 font-semibold flex items-center justify-center gap-3 text-lg transition-all duration-300 border-b-4 ${
              activeTab === key
                ? "border-orange-500 bg-[#ff91001a] text-orange-500"
                : "border-transparent text-gray-600 hover:text-orange-400"
            }`}
          >
            {key === "mission" && <span>🔍</span>}
            {key === "vision" && <span>🔭</span>}
            {key === "value" && <span>💎</span>}
            {content[key].title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-10 py-14">
        {/* Left Content */}
        <div className="max-w-[600px]">
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            {content[activeTab].description}
          </p>
          <ul className="space-y-4 mb-10">
            {content[activeTab].points.map((point, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-gray-800 text-base"
              >
                <span className="text-orange-500">⚙️</span>
                {point}
              </li>
            ))}
          </ul>
          <div>
            <button
              onClick={() => router.push("/")}
              className="relative overflow-hidden bg-orange-500 py-4 px-8 text-white flex items-center gap-4 group transition-all duration-500"
            >
              <span className="relative z-10">Contact Us</span>
              <FaArrowRightLong className="relative z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:rotate-0 rotate-0" />
              <span className="absolute inset-0 bg-black scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="rounded-3xl overflow-hidden w-[500px] h-[400px] relative shadow-lg">
          <Image
            src={content[activeTab].image}
            alt={content[activeTab].title}
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
