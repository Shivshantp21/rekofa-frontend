"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Eye,
  CircleDot,
  Gem,
  Settings,
  Cpu,
  Leaf,
  TrendingUp,
  Globe,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function ParallaxSection() {
  const [activeTab, setActiveTab] = useState("mission");

  const tabStyle = (tab) =>
    `flex items-center gap-2 px-6 py-4 text-sm font-semibold cursor-pointer transition-all duration-300
      ${
        activeTab === tab
          ? "bg-orange-500 text-white rounded-tl-2xl"
          : "text-gray-700 hover:text-orange-500"
      }`;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-start overflow-hidden px-8 ">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/parallax.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-70 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl text-white mx-auto flex justify-center gap-20 items-center">
          <div className="">
            {" "}
            <h3 className="text-sm font-semibold uppercase text-orange-500 mb-3">
              Our Approach
            </h3>
            <h1 className="text-5xl font-semibold leading-tight mb-4">
              Empowering sustainable <br />
              <span className="font-bold text-white">growth in industry</span>
            </h1>
          </div>
          <p className="text-md max-w-xl">
            We provide a wide range of services tailored to meet the unique
            needs of modern industries. From precision manufacturing and
            advanced automation to custom product design and efficient
            logistics.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <div className="bg-white rounded-3xl w-full max-w-6xl mx-auto -mt-36 shadow-lg relative">
        {/* Tabs */}
        <div className="grid grid-cols-3 border-b w-full overflow-hidden h-28">
          <div
            className={`${tabStyle(
              "mission"
            )} flex items-center justify-center`}
            onClick={() => setActiveTab("mission")}
          >
            <div className="flex  items-center justify-center gap-3">
              <Eye className="w-6 h-6" />
              <span>Our Mission</span>
            </div>
          </div>

          <div
            className={`${tabStyle("vision")} flex items-center justify-center `}
            onClick={() => setActiveTab("vision")}
          >
            <div className="flex  items-center justify-center gap-3">
              <CircleDot className="w-6 h-6" />
              <span>Our Vision</span>
            </div>
          </div>

          <div
            className={`${tabStyle("value")} flex items-center justify-center`}
            onClick={() => setActiveTab("value")}
          >
            <div className="flex items-center justify-center gap-3">
              <Gem className="w-6 h-6" />
              <span>Our Value</span>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="px-10 py-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {activeTab === "mission" && (
            <>
              <div>
                <p className="text-gray-700 text-md mb-6 leading-relaxed">
                  Our mission is to transform the factory and industry sectors
                  through sustainable practices, innovation, and advanced
                  technology, fostering growth that benefits both business and
                  the environment.
                </p>
                <ul className="space-y-4 text-sm text-gray-800">
                  <li className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-orange-500" /> Sustainable
                    Manufacturing Practices
                  </li>
                  <li className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-orange-500" /> Advanced
                    Technology Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-orange-500" /> Community and
                    Environmental Responsibility
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-orange-500" />{" "}
                    Innovation-Driven Growth
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/parallax.jpeg"
                  width={550}
                  height={350}
                  alt="Mission"
                  className="rounded-2xl shadow-md"
                />
              </div>
            </>
          )}

          {activeTab === "vision" && (
            <>
              <div>
                <p className="text-gray-700 text-md mb-6 leading-relaxed">
                  Our vision is to be the global benchmark for excellence in
                  industrial engineering solutions through sustainable growth,
                  cutting-edge technology, and unmatched service.
                </p>
                <ul className="space-y-4 text-sm text-gray-800">
                  <li className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-orange-500" /> Global
                    Innovation Leadership
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-orange-500" /> Long-term
                    Environmental Sustainability
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-orange-500" /> Long-term
                    Environmental Sustainability
                  </li>
                  <li className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-orange-500" /> Future-Ready
                    Manufacturing
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/abt.jpg"
                  width={550}
                  height={350}
                  alt="Vision"
                  className="rounded-2xl shadow-md"
                />
              </div>
            </>
          )}

          {activeTab === "value" && (
            <>
              <div>
                <p className="text-gray-700 text-md mb-6 leading-relaxed">
                  We value integrity, innovation, and impact. Every project we
                  undertake is driven by a commitment to quality and a focus on
                  delivering real value to our clients.
                </p>
                <ul className="space-y-4 text-sm text-gray-800">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-orange-500" />{" "}
                    Integrity in Everything
                  </li>
                  <li className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-orange-500" /> Constant
                    Innovation
                  </li>
                  <li className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-orange-500" /> Constant
                    Innovation
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-500" /> Customer-First
                    Approach
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/parallax.jpeg"
                  width={550}
                  height={350}
                  alt="Value"
                  className="rounded-2xl shadow-md"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
