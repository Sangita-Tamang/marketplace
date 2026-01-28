import React from "react"
import { Routes, Route } from "react-router-dom"

import Layout from "./Layout/Layout"
import DashboardLayout from "./Layout/DashboardLayout"

import Hero from "./Components/Hero"
import LatestProducts from "./Pages/LatestProducts"
import TrendingProducts from "./Pages/TrendingProducts"
import DiscountItem from "./Pages/DiscountItem"
import ShopexOffer from "./Pages/ShopexOffer"
import TopCategories from "./Pages/TopCategories"
import Login from "./Pages/Login"
import Home from "./Pages/Home"

function App() {
  return (
    <Routes>
      {/* ========= PUBLIC ROUTES ========= */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<LatestProducts />} />
        <Route path="trending-products" element={<TrendingProducts />} />
        <Route path="discount-items" element={<DiscountItem />} />
        <Route path="shopex-offer" element={<ShopexOffer />} />
        <Route path="top-categories" element={<TopCategories />} />
      </Route>

      {/* ========= ADMIN ROUTES ========= */}
      <Route path="/admin" element={<DashboardLayout />}>
        <Route index element={<h1 className="text-2xl font-bold">Dashboard</h1>} />
        <Route path="orders" element={<div>Orders Page</div>} />
        <Route path="products" element={<div>Products Page</div>} />
        <Route path="shipping" element={<div>Shipping Page</div>} />
        <Route path="payments" element={<div>Payments Page</div>} />
        <Route path="settings" element={<div>Settings Page</div>} />
      </Route>

      {/* ========= AUTH ========= */}
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
