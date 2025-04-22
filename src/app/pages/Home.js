"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { FaHandshake, FaUsers, FaGlobeAmericas } from "react-icons/fa";
import CompanySection from "../compo/Merge";
import Slide from "../compo/Slide";
import homeSlider from "../data/homeSlider";
import Find from "../compo/FInd";
import Expand from "../compo/Expand";


const imageData = [
  {
    image: "/Rekofas.jpg",
    title: "We Design Creativity",
    description: "Beyond Imagination",
  },
  {
    image: "/Rekof.jpg",
    title: "Estabilishing Top-Notch",
    description: "Quality Standards",
  },
  {
    image: "/rekofa.jpg",
    title: "Committed Towards",
    description: "Customer Satisfaction",
  },
];

export default function HeroSection() {
  const boxRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageData.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [imageData]);

  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current.children,
        { y: 50, opacity: 0 }, // Start position: below with opacity 0
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.3 } // End position: normal with staggered effect
      );
    }
  }, []);

  const stats = [
    {
      icon: <FaHandshake />,
      number: "500+",
      title: "Successfully",
      description: "completed projects",
    },
    {
      icon: <FaUsers />,
      number: "700+",
      title: "Highly",
      description: "specialised employees",
    },
    {
      icon: <FaGlobeAmericas />,
      number: "24",
      title: "Countries",
      description: "around the world",
    },
  ];

  return (
    <div>
      <section className="relative w-[100vw] h-[90vh] mx-auto  flex items-center justify-center text-white text-4xl font-bold overflow-hidden">
        {/* Background Image Slider */}
        {imageData.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt="bg"
            fill
            className={`absolute inset-0 object-cover transition-opacity duration-2000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Text Content */}
        {imageData.map((item, index) =>
          index === currentImage ? (
            <div
              key={index}
              ref={textRef}
              className="relative space-y-4 transition-opacity duration-1000 -left-98 "
            >
              <h1 className="text-7xl">{item.title}</h1>
              <h1 className="text-3xl">{item.description}</h1>
            </div>
          ) : null
        )}
      </section>
      

      <section className="h-screen mt-20 mb-40">
        <h1 className="text-7xl text-center font-bold mb-5">BUSINESS</h1>
        <p className="text-4xl text-center mx-52 mb-20">
          Empowering Industries Worldwide with Precision-Engineered Machines and
          Cutting-Edge Technologies.
        </p>
        <Expand />
      </section>

      <section className="w-full py-16 bg-[#f5f6f8] flex justify-center items-center flex-col mt-40">
        <h3 className=" text-xl my-8 text-center text-gray-600">
          
        </h3>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 space-x-8 space-y-3 relative justify-center items-center "
            >
              <div className="flex gap-10">
                {" "}
                <div className="text-6xl">{stat.icon}</div>
                <h2 className="text-7xl font-bold text-gray-900">
                  {stat.number}
                </h2>
              </div>
              <p className="font-bold text-gray-900 text-xl">{stat.title}</p>
              <p className="text-gray-600">{stat.description}</p>
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 h-32 w-px bg-gray-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      <CompanySection />
      <section className="relative w-full h-[20vh] mt-20 ">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/sustainable.jpg"
            alt="Sustainability Background"
            layout="fill"
            objectFit="cover"
            className="w-full h-full "
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-end h-full px-70 text-white">
          <h3 className="text-sm uppercase font-semibold">
            Delivering Innovation
          </h3>
          <h1 className="text-4xl font-semibold">
            Sustainability <strong>Goals</strong>
          </h1>
          <p className="text-sm mt-2 ">
            We are focused on building a long-term, sustainable business.
          </p>

          {/* Button */}
          <button className="mt-4 px-6 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition">
            See NEX Sustainability →
          </button>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4 text-center mb-20 h-[50vh]">
        <div className="max-w-4xl mx-auto mb-5">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 whitespace-nowrap mb-10">
            Honoring <span className="text-[#9e0000] font-bold">50 Years</span>{" "}
            of Quality and Innovation in Power Press Machines
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center row-span-15">
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="JK Files"
            className="max-h-12 mx-auto mb-10"
          />
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="JK Files"
            className="max-h-12 mx-auto mb-10"
          />
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="JK Files"
            className="max-h-12 mx-auto mb-10"
          />
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="JK Files"
            className="max-h-12 mx-auto mb-10"
          />
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="JK Files"
            className="max-h-12 mx-auto mb-10"
          />
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="JK Files"
            className="max-h-12 mx-auto mb-10"
          />
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="JK Files"
            className="max-h-12 mx-auto mb-10"
          />
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="JK Files"
            className="max-h-12 mx-auto mb-10"
          />
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="JK Files"
            className="max-h-12 mx-auto mb-10"
          />
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="JK Files"
            className="max-h-12 mx-auto mb-10"
          />
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="JK Files"
            className="max-h-12 mx-auto mb-10"
          />
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="JK Files"
            className="max-h-12 mx-auto mb-10"
          />
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="JK Files"
            className="max-h-12 mx-auto mb-10"
          />
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="JK Files"
            className="max-h-12 mx-auto mb-10"
          />
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="JK Files"
            className="max-h-12 mx-auto mb-10"
          />
        </div>
      </section>

      <Slide data={homeSlider} title={"Our News"} />

      <Find />
    </div>
  );
}
