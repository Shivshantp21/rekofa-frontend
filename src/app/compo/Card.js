import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiGearFineFill } from "react-icons/pi";
import { BsFillDeviceHddFill } from "react-icons/bs";
import { GrVirtualMachine } from "react-icons/gr";
import { BsSourceforge } from "react-icons/bs";

const icons = {
  PiGearFineFill: PiGearFineFill,
  BsFillDeviceHddFill: BsFillDeviceHddFill,
  GrVirtualMachine: GrVirtualMachine,
  BsSourceforge: BsSourceforge,
};

const Card = ({ data, title }) => {
  return (
    <div className="container mx-auto px-4  flex justify-center items-center flex-col">
      <h1 className="text-5xl mb-10">{title}</h1>
      <div className="grid grid-cols-[50%_50%] md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {data.map((item, index) => {
          const IconComponent = icons[item.icon];

          return (
            <div
              key={index}
              className={`${
                index % 2 == 0 ? "flex-col" : "flex-col-reverse"
              } flex h-[80vh]`}
            >
              {/* Image Section */}
              <div className="h-[50%] w-full overflow-hidden relative">
                <Image
                  src={item.image}
                  width={300}
                  height={300}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-600 hover:scale-105 ease-in"
                />
              </div>

              {/* Content Box */}
              <div className=" flex justify-center items-start gap-3 flex-col bg-white  p-5 rounded-md h-[50%]">
                {IconComponent && <IconComponent className="text-4xl mb-2" />}

                <h3 className="text-2xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-1">{item.description}</p>

                <Link
                  href={item.link}
                  className="inline-block mt-3 text-black font-medium underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
