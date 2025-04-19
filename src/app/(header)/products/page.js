import productData from "@/app/data/productData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productData.map((item, index) => (
        <div
          key={index}
          className="relative group overflow-hidden product-card"
        >
          {/* Image */}
          <div className="relative h-[350px] shadow-2xl/30">
            <Link href={`/products/${item.id}`}>
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                className="object-contain rounded-lg  transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Text Overlay */}
          <div className="absolute top-4 left-4 bg-opacity-90 px-3 py-2 rounded ">
            <h2 className="text-lg font-semibold text-gray-900 product-head ">
              {item.title}
            </h2>
          </div>

          {/* Bottom Button */}
          <div className="absolute bottom-4 left-4">
            <Link
              href={`/products/${item.id}`}
              className="text-black product-icon flex items-center"
            >
              {/* <MdOutlineDoubleArrow size={24} /> */}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
