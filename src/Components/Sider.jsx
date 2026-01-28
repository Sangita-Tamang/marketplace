import React from "react"
import { NavLink } from "react-router-dom"

import { MdDashboardCustomize } from "react-icons/md"
import { FaCartArrowDown } from "react-icons/fa6"
import { HiShoppingBag } from "react-icons/hi"
import { MdLocalShipping } from "react-icons/md"
import { MdOutlinePayment } from "react-icons/md"
import { IoMdSettings } from "react-icons/io"

const menu = [
  { path: "/admin", 
    title: "Dashboard",
    icon: <MdDashboardCustomize 
    size={20} /> },
  
    { path: "/admin/orders",
    title: "Orders",
    icon: <FaCartArrowDown
    size={20} /> },
  
    { path: "/admin/products", 
    title: "Products",
    icon: <HiShoppingBag 
    size={20} /> },
  
    { path: "/admin/shipping", 
    title: "Shipping", 
    icon: <MdLocalShipping 
    size={20} /> },
  
    { path: "/admin/payments", 
    title: "Payments", 
    icon: <MdOutlinePayment 
    size={20} /> },
 
    { path: "/admin/settings", 
    title: "Settings", 
    icon: <IoMdSettings 
    size={20} /> },
]

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-blue-950 border-r shadow-sm">
      <h2 className="text-xl font-bold text-center py-5 border-b">
        Admin Panel
      </h2>

      <nav className="p-4 space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-2 rounded-lg transition
              ${
                isActive
                  ? "bg-amber-300 text-black font-semibold"
                  : "text-white-700 hover:bg-amber-100"
              }`
            }
          >
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
