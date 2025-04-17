import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

async function getBlogs() {
    const res = await fetch('http://localhost:3000/api/admin/blogs/', {
      cache: 'no-store', // or 'force-cache' if you want pre-rendered
    });
  
    if (!res.ok) throw new Error("Failed to fetch blogs");
  
    return res.json();
  }

const Slide = async() => {
    const blogs = await getBlogs();
  return (
    <div className="container mx-auto mb-20 p-4 text-center max-w-6xl">
      <h1 className="text-4xl mb-6 text-center">Blogs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden">
            <div className="w-full mb-4">
              <Image
                src={item.img}
                height={300}
                width={500}
                alt="img"
                className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
            <div className="text-start w-full p-4">
              <p className="text-gray-600 mb-2 font-semibold">{item.date}</p>
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h1>
              <p className="text-gray-600 mb-4 text-base">{item.para}</p>
              <Link href={item.link}>
                <p className="text-indigo-600 hover:text-indigo-800 font-medium">Read More</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
