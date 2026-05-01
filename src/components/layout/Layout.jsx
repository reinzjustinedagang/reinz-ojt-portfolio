import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-[#f0f8ff]">
      {/* HEADER (controls sidebar) */}
      <Header onMenuClick={() => setIsSidebarOpen(true)} />

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* OVERLAY (mobile only) */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* SIDEBAR */}
        <div
          className={`fixed md:static z-50 h-full transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        >
          <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
        </div>

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto p-2 md:p-4 md:ml-0 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
