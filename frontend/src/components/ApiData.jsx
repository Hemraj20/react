import React, { useEffect, useState } from "react";

const ApiData = () => {
  const [myproducts, setMyproducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setMyproducts(data.products);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-slate-800">
          Our Products
        </h1>
        <p className="text-gray-500 mt-3 text-lg">
          Discover our latest premium collection
        </p>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {myproducts.map((prod) => (
          <div
            key={prod.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
          >
            {/* Image */}
            <div className="bg-gray-100 h-56 flex items-center justify-center overflow-hidden">
              <img
                src={prod.thumbnail}
                alt={prod.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Body */}
            <div className="p-5">

              {/* Category */}
              <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                {prod.category}
              </span>

              {/* Title */}
              <h2 className="text-xl font-bold text-slate-800 mt-3">
                {prod.title}
              </h2>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                {prod.description}
              </p>

              {/* Price */}
              <div className="flex justify-between items-center mt-5">
                <span className="text-2xl font-bold text-blue-600">
                  ${prod.price}
                </span>

                <span className="text-yellow-500 font-semibold">
                  ⭐ {prod.rating}
                </span>
              </div>

              {/* Stock */}
              <div className="mt-3 flex justify-between text-sm">
                <span className="text-green-600">
                  Stock: {prod.stock}
                </span>

                <span className="text-gray-500">
                  {prod.brand}
                </span>
              </div>

              {/* Button */}
              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                View Details
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ApiData;