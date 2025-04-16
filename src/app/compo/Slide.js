import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ data, title }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="container mx-auto mb-20 p-4 text-center">
      <h1 className="text-4xl mb-6 text-center">{title}</h1>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-2">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden">
              <div className="w-full mb-4">
                <Image
                  src={item.img}
                  height={300}
                  width={500}
                  alt="img"
                  className=" w-full h-auto object-cover transform transition-transform duration-600 ease-in hover:scale-105"
                />
              </div>
              <div className="text-start w-full p-4">
                <p className="text-gray-600 mb-4 font-semibold">{item.date}</p>
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h1>
                <p className="text-gray-600 mb-4">{item.para}</p>
                <p className="text-gray-600 mb-4 text-lg">{item.para}</p>
                <Link href={item.link}>
                  <p className="text-indigo-600 hover:text-indigo-800 font-medium">Read More</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
