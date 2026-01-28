import React from "react";

const blogs = [
  {
    img: "/blog1.png",
    author: "SaberAli",
    date: "21 August 2020",
    title: "Top essential Trends in 2021",
    desc:
      "More off this less hello samlande lied much over tightly circa horse taped mightly",
  },
  {
    img: "/blog2.png",
    author: "SaberAli",
    date: "21 August 2020",
    title: "Top essential Trends in 2021",
    desc:
      "More off this less hello samlande lied much over tightly circa horse taped mightly",
  },
  {
    img: "/blog3.png",
    author: "SaberAli",
    date: "21 August 2020",
    title: "Top essential Trends in 2021",
    desc:
      "More off this less hello samlande lied much over tightly circa horse taped mightly",
  },
];

function LatestBlog() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-center text-3xl font-bold text-indigo-900 mb-14">
          Latest Blog
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />

      
              <div className="p-6">
                
         
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="text-pink-500 font-medium">
                    {blog.author}
                  </span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>

            
                <h3 className="font-semibold text-indigo-900 mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                  {blog.desc}
                </p>

                <a
                  href="#"
                  className="text-pink-600 font-medium text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default LatestBlog;
