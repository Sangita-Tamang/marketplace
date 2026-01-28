import React from "react";
import Slider from "react-slick";


const banner = [
  {
    quotes: "Best Furniture For Your Castle....",
    title: "New Furniture Collection Trends in 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    image: "/Sofa.png"

  },
  {
    quotes: "Best Furniture For Your Castle....",
    title: "Modern Furniture Collection 2021",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
 image: "/Sofa.png"
,
  },
  {
    quotes: "Best Furniture For Your Castle....",
    title: "Luxury Furniture Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    image: "/Sofa.png"
,
  },
]

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
    <section className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <Slider {...settings}>
          {banner.map((item, index) => (
            <div key={index}>
              <div className="grid md:grid-cols-2 items-center gap-10">
                
               
                <div>
                  <p className="text-pink-500 font-semibold mb-3">
                    {item.quotes}
                  </p>

                  <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4 drop-shadow-sm">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <button className="bg-pink-600 text-white px-6 py-3 rounded transition duration-300 hover:bg-pink-700 shadow-md">
                    Shop Now
                  </button>
                </div>

        
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt="Furniture"
                    className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    </>
  )
}

export default Hero;
