import React, { useEffect, useRef } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../Components/Sider";

function DashboardLayout() {
  const token = localStorage.getItem("token");
  const toastShown = useRef(false);

  useEffect(() => {
    if (!token && !toastShown.current) {
      toast.error("Please login first!");
      toastShown.current = true;
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
   
      <Sidebar />

     
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
