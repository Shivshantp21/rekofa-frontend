"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { LuCircleArrowRight } from "react-icons/lu";
const items = [
  {
    id: 1,
    title: "Tractor",
    image: "/tractor.jpg",
    description:
      "Comprehensive agricultural solutions for modern farming equipment and productivity.",
  },
  {
    id: 2,
    title: "Injection Molding Machine",
    image: "/forging.jpg",
    description:
      "Precision-engineered machines for efficient industrial production.",
  },
  {
    id: 3,
    title: "Track Shoe",
    image: "/autoparts.jpg",
    description: "Robust components for heavy-duty and off-road machinery.",
  },
];

export default function Expand() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {items.map((item) => {
        const isActive = activeId === item.id;
        const isAnyActive = activeId !== null;

        const widthClass = isActive
          ? "w-[60%]"
          : isAnyActive
          ? "w-[20%]"
          : "w-1/3";

        return (
          <div
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`relative flex-shrink-0 transition-all duration-5000 delay-200 overflow-hidden cursor-pointer ${widthClass} h-screen`}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {!isActive && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-end text-white text-3xl font-semibold px-10">
                <div className="flex items-end justify-between w-full flex-col ">
                  {" "}
                  <p className="">{item.title}</p>
                  <LuCircleArrowRight className="text-5xl mt-8 text-right text-white"  />
                </div>
              </div>
            )}

            {isActive && (
              <div className="absolute inset-0 bg-black/60 text-white p-8 flex flex-col items-end justify-center z-30">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveId(null);
                  }}
                  className="absolute top-4 right-4 text-white text-4xl"
                >
                  <X size={32} />
                </button>
                <div className="text-left">
                  <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                  <p className="max-w-md ">{item.description}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
