import React from 'react';

function UniqueFea() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-8">
    
        <div className="relative w-[300px] h-[300px] mx-auto md:mx-0">
          <img
            src="/Group 153.png"
            alt="Sofa"
            className="relative z-10 w-[400px] mx-auto mt-10"
          />
        </div>

   
        <div>
          <h1 className="text-4xl font-bold mb-4 text-indigo-900">
            Unique Features Of Latest & Trending Products
          </h1>
          <ul className="text-gray-500 mb-6 list-disc pl-5">
            <li className="marker:text-pink-500">
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="marker:text-blue-500">
              Reinforced with double wood dowels, glue, screw-nailed corner blocks and machine nails
            </li>
            <li className="marker:text-green-500">
              Arms, backs and seats are structurally reinforced
            </li>
          </ul>


          <div  className='flex flex-row gap-4'>
          <button className="bg-pink-500 text-white px-7 py-3 rounded hover:bg-pink-600 transition">
            Add To Cart
          </button>
          <div>
          <span className='text-blue-900 font-bold'>
          B&B Italian Sofa 
          <p className='font-normal'>$32.00</p>
          </span>
        </div>
      </div>
       </div>
       </div>
    </section>
  )
}

export default UniqueFea;
