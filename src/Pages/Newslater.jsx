import React from "react";

function Newsletter() {
  return (
    <section
      className="py-12 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/newslater.png')" }}
    >
      <div className="bg-gray-300 max-w-3xl mx-auto text-center px-6 py-8 rounded-lg">
        
        <p className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
          Get Latest Update By Subscribe <br />
          Our Newsletter
        </p>

        <button className="bg-pink-600 text-white text-lg px-8 py-3 rounded hover:bg-pink-700 transition">
          Shop Now
        </button>

      </div>
    </section>
  );
}

export default Newsletter;
