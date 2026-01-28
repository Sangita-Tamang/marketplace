import React from 'react'

function DiscountItem() {
  return (
    <section className="bg-white-100">
      <div className="container mx-auto px-6 py-16">
        
    
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold mb-4 text-indigo-900">
            Discount Item
          </h1>
        </div>

      
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <span className="text-gray-500 cursor-pointer hover:text-pink-600 hover:underline hover:list-disc transition">
            Wood Chair
          </span>
          <span className="text-gray-500 cursor-pointer hover:text-pink-600 hover:underline hover:list-disc transition">
            Plastic Chair
          </span>
          <span className="text-gray-500 cursor-pointer hover:text-pink-600 hover:underline hover:list-disc transition">
            Sofa Collection
          </span>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-12 mt-12">
          
       
          <div className="space-y-4 max-w-xl">
            <h1 className="text-4xl font-bold mb-4 text-indigo-900">
              20% Discount Of All Products
            </h1>
            <p className="text-pink-600">Eams Sofa Compact</p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maxime dolorum, labore reiciendis aliquid doloribus dolores laudantium eos!
            </p>
            <ul className="text-gray-500 mb-6 space-y-2">
              <li>✓ Material expose like metals</li>
              <li>✓ Simple neutral colours</li>
              <li>✓ Clear lines and geometric figures</li>
              <li>✓ Material expose like metals</li>
            </ul>
            <button className="bg-pink-500 text-white px-7 py-3 rounded hover:bg-pink-600 transition">
              Shop Now
            </button>
          </div>

        
          <div className="relative w-[600px] h-[500px] mx-auto md:mx-0">
            <img
              src="/tortuga-01-b 1.png"
              alt="Sofa"
              className="relative z-10 w-[400px] mx-auto mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscountItem
