import React from "react";

const offers = [
  {
    id: 1,
    icon: "🚚",
    title: "24/7 Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
  },
  {
    id: 2,
    icon: "💰",
    title: "24/7 Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
  },
  {
    id: 3,
    icon: "🏅",
    title: "24/7 Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
  },
  {
    id: 4,
    icon: "⏱️",
    title: "24/7 Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
  }
];

function ShopexOffer() {
  return (
    <section className="container mx-auto px-6 py-16">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
        What Shopex Offer!
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {offers.map((item) => (
          <div
            key={item.id}
            className="bg-white text-center p-8 shadow-md rounded-lg hover:shadow-xl transition"
          >
            {/* Icon */}
            <div className="text-4xl mb-4">{item.icon}</div>

            {/* Title */}
            <h3 className="text-indigo-900 font-semibold mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default ShopexOffer;
