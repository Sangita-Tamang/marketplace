import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand = [
  {
    title: "Mini LCW Chair",
    price: "$56.00",
    img: "/top1.png",
  },
  {
    title: "Mini LCW Chair",
    price: "$56.00",
    img: "/top2.png",
  },
  {
    title: "Mini LCW Chair",
    price: "$56.00",
    img: "/top3.png",
  },
  {
    title: "Mini LCW Chair",
    price: "$56.00",
    img: "/top4.png",
  },
  {
    title: "Mini LCW Chair",
    price: "$56.00",
    img: "/top4.png",
  },
];

function TopCategories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-indigo-900 mb-10">
        Top Categories
      </h2>

      <Slider {...settings}>
        {Brand.map((item, index) => (
          <div key={index} className="px-4">
            <div className="group flex flex-col items-center">
              
           
              <div className="relative w-48 h-48 rounded-full bg-gray-50 flex items-center justify-center transition-all duration-300 group-hover:ring-4 group-hover:ring-purple-400">
                
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />

                
                <button className="absolute bottom-6 px-4 py-1 text-sm text-white bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition">
                  View Shop
                </button>
              </div>

             
              <h3 className="mt-4 font-semibold text-indigo-900">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TopCategories;
