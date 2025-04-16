import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-24 px-4 mx-auto">
      <div className="max-w-8xl mx-auto flex justify-around">
        {/* Quick Contact Section */}
        <div>
          <h3 className="text-2xl font-bold">Quick Contact</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="border p-2 rounded-md w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded-md w-full"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <select className="border p-2 rounded-md w-full">
              <option>Inquiry Type</option>
            </select>
            <div className="flex border p-2 rounded-md items-center">
              <span className="mr-2"> +91</span>
              <input type="text" placeholder="Mobile" className="w-full" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              placeholder="Message"
              className="border p-2 rounded-md w-full"
            />
            <button className="bg-orange-500 px-3 py-2 rounded-full ml-2">➜</button>
          </div>
        </div>

        {/* Pages & Machines Section */}
        <div className="flex justify-between gap-20 ">
          <div>
            <h3 className="text-xl font-semibold">Pages</h3>
            <ul className="mt-4 space-y-2">
              {["Home", "About us", "News", "Contact"].map((page) => (
                <li key={page}>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h3 className="text-xl font-semibold">Machines</h3>
            <ul className="mt-4 space-y-2">
              {[
                "C Frame Power Presses",
                "Cross Shaft Power Presses",
                "H Frame Power Presses",
                "Knuckle Joint Power Presses",
              ].map((machine) => (
                <li key={machine}>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    {machine}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="#" className="text-orange-500 mt-2 inline-block">
              View More
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="border-t border-black text-sm w-[100vw] mt-14"></div> */}
      {/* Contact Address */}
      <div className="flex max-w-8xl mx-auto justify-around text-gray-600 text-sm py-10 px-14">
        {" "}
        <div className=" text-start text-black">
          <p className="text-2xl font-bold">Contact address</p>
          <p className="whitespace-pre">
            29 / 535, G.T. Road, Opp. Dhandari Kalan Railway Station,
            Ludhiana -141010, Punjab, India.
          </p>
          <p>Mobile - +91-7439277777, +91-9988802100</p>
          <p>Email - info@mankoopresses.com</p>
        </div>
        {/* Footer Bottom */}
        <div className=" flex flex-col  justify-between items-center ">
          <p>Privacy Policy & Terms of Conditions</p>
          <p>
            Copyrights by © Mankoo India Pvt. Ltd. / 2022. All rights reserved
          </p>
          <div className="flex space-x-4">
            <Link href="#">
              {/* <Image
                src="/facebook.png"
                alt="Facebook"
                width={24}
                height={24} 
              /> */}
            </Link>
            <Link href="#">
              {/* <Image src="/twitter.png" alt="Twitter" width={24} height={24} /> */}
            </Link>
            <Link href="#">
              {/* <Image
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              /> */}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
