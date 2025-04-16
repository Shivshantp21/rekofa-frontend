import Image from "next/image";
import { FaClipboardList, FaTools, FaTruck } from "react-icons/fa";

const CompanySection = () => {
  return (
    <section className=" mx-auto px-4 max-w-7xl my-30 flex flex-col justify-center items-center ">
        <div className="mb-20 text-center">
            <h1 className="text-[50px] font-bold mb-2">Our Company</h1>
            <p className="text-[14px]">At NEX, we embrace this future development and have set out our mission to lead transformation through mobility.</p>
        </div>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 ">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-light text-gray-800">Dream Big</h2>
          <h2 className="text-4xl font-bold text-gray-900">Inspire the World</h2>
          <p className="text-gray-600 mt-4">
            A company involved in servicing, maintenance, and repairs of
            engines, prime movers, and exhaust gas turbochargers.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔ Assured plant availability and operational security</li>
            <li>✔ Relief of company&apos;s own maintenance resources</li>
            <li>✔ Improved operating conditions</li>
            <li>✔ Transparent costs</li>
          </ul>
        </div>

        {/* Right Content - Orange Background with Image */}
        <div className="md:w-1/2 relative bg-orange-500 p-8 rounded-lg flex items-center">
          <div>
            <h3 className="text-white text-3xl font-semibold">
              Let&apos;s Grow <span className="block">Together</span>
            </h3>
            <p className="text-white mt-4">
              Join our award-winning team, and enjoy a creative, dynamic and
              inclusive culture focused on one goal.
            </p>
            <button className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition">
              See Open Positions →
            </button>
          </div>
          {/* Positioned Image */}
          <div className="absolute -right-10 bottom-0 hidden md:block">
            <Image
              src="/rekofa.jpg"
              width={250}
              height={250}
              alt="Professional Woman"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section - Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="flex items-start gap-4">
          <FaClipboardList className="text-3xl text-blue-600" />
          <div>
            <h4 className="text-lg font-semibold">A FULL SERVICE</h4>
            <p className="text-gray-600">
              Providing a wide range of services related to the factory
              production lines.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaTools className="text-3xl text-blue-600" />
          <div>
            <h4 className="text-lg font-semibold">MAINTENANCE</h4>
            <p className="text-gray-600">
              We are proud to protect your organization with our award-winning
              products.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaTruck className="text-3xl text-blue-600" />
          <div>
            <h4 className="text-lg font-semibold">DELIVERY</h4>
            <p className="text-gray-600">
              For all of our products, we offer fast delivery and outstanding
              service in the US.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
