"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import NavData from "../data/navData";
import Button from "../compo/Button";

const Navbar = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Normalize path to remove trailing slashes
    const cleanPath = pathname.replace(/\/$/, "") || "/";
    setCurrentPath(cleanPath);
  }, [pathname]);

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
            {NavData.map((item, index) => {
              const isActive =
                currentPath === item.link.replace(/\/$/, "") ||
                pathname === item.link;

              return (
                <div
                  key={index}
                  className="font-bold flex flex-col items-center relative"
                >
                  <Link href={item.link} className="py-8">
                    {item.title}
                  </Link>
                  {isActive && (
                    <div className="w-full h-1 bg-[#9e0000]"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Admin Panel Button */}
          {currentPath === "/blogs" && (
            <div>
              <Link
                href={"https://rekofa-backend.onrender.com/admin/login"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-white rounded-lg shadow-md bg-black"
              >
                Admin Panel
              </Link>
            </div>
          )}

          {/* CTA Button */}
          <Button text={"Get a Quote"} />
        </section>
      </div>
    </div>
  );
};

export default Navbar;
