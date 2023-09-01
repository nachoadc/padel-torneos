import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const LayoutAdmin = () => {
  return (
    <main className="flex h-screen bg-slate-200">
      <Sidebar/>
      <Outlet />
    </main>
  );
};

export default LayoutAdmin;
