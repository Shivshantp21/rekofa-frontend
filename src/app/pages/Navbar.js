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
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
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

          {/* Button */}
          <Button text={"Get a Quote"} />
        </section>
      </div>
    </div>
  );
};

export default Navbar;
