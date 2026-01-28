import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Newsletter */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Hekto</h2>

          <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
            Subscribe to our newsletter
          </label>

          <div className="flex gap-2">
            <input
              type="email"
              id="email"
              placeholder="Enter Email Address"
              className="border border-gray-300  rounded w-full"
            />
            <button className="bg-pink-600 text-white px-4 py-3 rounded">
              Sign Up
            </button>
          </div>

          <p className="text-gray-600 mt-4 text-sm">
            <span className="font-semibold">Contact Info:</span><br />
            17 Princess Road, London,<br />
            Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold text-black mb-3">Categories</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="font-bold text-black mb-3">Customer Care</h3>
          <ul className="text-gray-600 space-y-2">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-bold text-black mb-3">Pages</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer
