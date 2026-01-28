import React from "react";

const products = [
  { id: 1, img: "/Group 137.png", price: "$42.00", old: "$65.00", description: "Comfort Handy Craft" },
  { id: 2, img: "/image 23.png", price: "$42.00", old: "$65.00", description: "Comfort Handy Craft", sale: true },
  { id: 3, img: "/image 32.png", price: "$42.00", old: "$65.00", description: "Comfort Handy Craft" },
  { id: 4, img: "/image 3.png", price: "$42.00", old: "$65.00", description: "Comfort Handy Craft" },
  { id: 5, img: "/image 15.png", price: "$42.00", old: "$65.00", description: "Comfort Handy Craft" },
  { id: 6, img: "/image 1168.png", price: "$42.00", old: "$65.00", description: "Comfort Handy Craft" },
];

function LatestProducts() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-indigo-900">
        Latest Products
      </h2>

     <div className="flex justify-center gap-6 mt-4 text-sm">
  <span className="text-gray-500 font-semibold cursor-pointer hover:text-pink-600 transition">
    New Arrival
  </span>

  <span className="text-gray-500 cursor-pointer hover:text-pink-600 transition">
    Best Seller
  </span>

  <span className="text-gray-500 cursor-pointer hover:text-pink-600 transition">
    Featured
  </span>

  <span className="text-gray-500 cursor-pointer hover:text-pink-600 transition">
    Special Offer
  </span>
</div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 text-center relative">
            
            {product.sale && (
              <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded">
                Sale
              </span>
            )}

            <img
              src={product.img}
              alt={product.description}
              className="mx-auto h-40 object-contain"
            />

            <h3 className="mt-4 text-gray-700 font-semibold">
              {product.description}
            </h3>

            <div className="mt-2">
              <span className="text-pink-600 font-bold">{product.price}</span>
              <span className="text-gray-400 line-through ml-2">
                {product.old}
              </span>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default LatestProducts;
