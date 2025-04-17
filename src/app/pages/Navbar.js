"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavData from "../data/navData";
import Button from "../compo/Button";

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md text-black">
      <div className="w-full px-14">
        <section className="flex justify-between items-center relative">
          {/* Logo */}
          <div>
            <Link href={"/"}>
              <Image src={"/logo.png"} height={130} width={130} alt="Logo" />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex gap-10">
            {NavData.map((item, index) => (
              <div
                key={index}
                className="font-bold flex flex-col items-center relative"
              >
                <Link href={item.link} className="py-8">
                  {item.title}
                </Link>
                {path === item.link && (
                  <div className="w-full h-1 bg-orange-500"></div>
                )}
              </div>
            ))}
          </div>

          <div className="">
            <Link
              href={'https://rekofa-backend.onrender.com/admin/login'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700"
            >
              Go to Admin Panel
            </Link>
          </div>

          {/* Button */}
          <Button text={"Get a Quote"} />
        </section>
      </div>
    </div>
  );
};

export default Navbar;
