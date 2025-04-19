import productDetails from "@/app/data/productDetails";
import Image from "next/image";
import Link from "next/link";

const ProductDetail = async ({ params }) => {
  const { id } = await params;

  const product = productDetails.find((p) => p.id === id);

  if (!product) {
    return <h1 className="text-center text-2xl">Product Not Found</h1>;
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto py-10 px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <p className="text-gray-700 mt-4">{product.para1}</p>
          <p className="text-gray-700 mt-4">{product.para2}</p>
          <p className="text-gray-700 mt-4">{product.para3}</p>
          <p className="text-gray-700 mt-4">{product.para4}</p>

          <Link
            href={product.pdfLink}
            download
            target="_blank"
            className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md"
          >
            Download Brochure
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-end mt-6 md:mt-0">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Technical Specification - Only for Hydraulic Thread Rolling Machine */}
      {["hydraulic-thread-rolling", "thread-rolling", "hydraulic-rolling"].includes(product.id) && product.technicalSpecifications && (
        <section>
          <div className="max-w-6xl mx-auto my-10 px-4">
            <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                {/* Table Header */}
                <thead>
                  <tr className="bg-gray-100">
                    {product.technicalSpecifications.headers.map((header, index) => (
                      <th
                        key={index}
                        className="border border-gray-300 px-4 py-2 text-left"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {product.technicalSpecifications.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border border-gray-300">
                      {/* Specification Name */}
                      <td className="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">
                        {row.name}{" "}
                        <span className="text-gray-500">({row.unit})</span>
                      </td>

                      {/* Specification Values */}
                      {row.values.map((value, colIndex) => (
                        <td
                          key={colIndex}
                          className="border border-gray-300 px-4 py-2 text-center"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
