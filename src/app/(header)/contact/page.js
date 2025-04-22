"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const addressData = [
  {
    add: "10542, St.no.9, Partap Nagar Ludhiana-141-003, Punjab (INDIA)",
    name: "REKOFA INDIA",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.882538297915!2d75.8639312761296!3d30.889946778016654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a82ff5766291b%3A0xb5e855bb38611969!2sStreet%20Number%209%2C%20Ludhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1743769046427!5m2!1sen!2sin",

  },
  {
    add: "D-227, Phase-7, Focal Point, Ludhiana-141010, Punjab (INDIA)",
    name: "REKOFA SMALL TOOLS PVT. LTD.",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4889.775667395875!2d75.93420561815377!3d30.873599331211864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a9d14276bc0db%3A0xfa8315de31333dfd!2sRekofa%20Small%20Tools%20Private%20Limited!5e0!3m2!1sen!2sin!4v1743768769252!5m2!1sen!2sin",
    
  },
];

const ContactPage = () => {
  const [map, setMap] = useState(addressData[0]);

  return (
    <div>
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row mt-20">
        {/* Left Section */}
        <div className="md:w-1/2 pr-8">
          <h2 className="text-6xl font-bold text-blue-900 mb-4 whitespace-nowrap">
            Make the First Move
          </h2>
          <h2 className="text-3xl font-bold text-blue-900 mb-4 whitespace-nowrap">
            We’ll Take It From There.
          </h2>
          <p className="text-[#9e0000] mb-4 font-bold">
            Leave a message and <br />
            we will get back to you in 24 hrs
          </p>
          <p className="mb-2 text-lg font-semibold">
            Mobile -{" "}
            <span className="text-[#9e0000]">
              +91-98140-21475, 98882-00084
            </span>
          </p>
          <p className="mb-6 text-lg font-semibold">
            Email -{" "}
            <span className="text-[#9e0000]">info@rekofaindia.com</span>
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 bg-white p-8 shadow-md">
          <h3 className="text-3xl font-semibold mb-4">Leave a message</h3>
          <form className="space-y-8">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-600">Name</label>
                <input
                  type="text"
                  className="w-full border-b py-2 focus:outline-none text-black"
                  placeholder="Name"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-600">Your Number</label>
                <input
                  type="text"
                  className="w-full border-b py-2 focus:outline-none"
                  placeholder="Your Number"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-600">Your Email</label>
              <input
                type="email"
                className="w-full border-b py-2 focus:outline-none"
                placeholder="Email here"
              />
            </div>
            <div>
              <label className="block text-gray-600">
                What&apos;s on your mind?
              </label>
              <textarea
                className="w-full border-b py-2 focus:outline-none"
                placeholder="What's on your mind?"
                rows="3"
              ></textarea>
            </div>
            <button className="bg-blue-900 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-12 gap-12">
        {/* Left Side - Address List */}
        <div className="w-full lg:w-1/3">
          <div className="text-3xl text-black text-center lg:text-left mb-8 font-bold flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#9e0000]" size={28} />
            Find Us Here
          </div>

          <div className="flex flex-col gap-8">
            {addressData.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-2 text-[#9e0000] font-semibold text-lg mb-1">
                  <HiOutlineLocationMarker size={22} />
                  {item.name}
                </div>
                <button
                  onClick={() => setMap(item)}
                  className="text-blue-700 text-left hover:underline"
                >
                  {item.add}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="w-full lg:w-2/3">
          <iframe
            src={map.link}
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl border shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
