import React from 'react';

const products = [
  {
    id: 1,
    title: "Cantilever chair",
    image: "/image 1TP.png",
    code: "YS93201",
    price: "$42.00",
  },
  {
    id: 2,
    title: "Cantilever chair",
    image: "/image 31TP.png",
    code: "YS93201",
    price: "$42.00",
  },
  {
    id: 3,
    title: "Cantilever chair",
    image: "/image 1170TP.png",
    code: "YS93201",
    price: "$42.00",
  },
  {
    id: 4,
    title: "Cantilever chair",
    image: "/image 1170TP.png",
    code: "YS93201",
    price: "$42.00",
  },
];

function TrendingProducts() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-indigo-900">
        TrendingProducts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 rounded-lg p-4 text-center hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto h-40 object-contain"
            />

            <h3 className="mt-4 font-semibold text-gray-800">
              {product.title}
            </h3>

            <div className="flex justify-center gap-4 mt-2">
              <p className="text-blue-600 font-bold">
                {product.price}
              </p>
              <p className="text-red-500 text-sm">
                {product.code}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingProducts;
