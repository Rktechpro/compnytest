
"use client";
import { useState } from "react";
import { Home, Users, FileText, Calendar, Menu, X } from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home },
  { name: "Shifts", icon: Calendar, active: true },
  { name: "Employees", icon: Users },
  { name: "Reports", icon: FileText },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 m-2 rounded-lg bg-gray-800 text-white"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0  left-0 h-screen w-64 bg-gray-800 text-white 
        flex flex-col justify-between p-4 transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Top Section */}
        <div className="my-10">
          <h1 className="text-xl font-bold mb-6">Company</h1>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <div
                key={item.name}
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors duration-200
                ${item.active ? "bg-gray-700 text-white font-semibold" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center gap-3 border-t border-gray-700 pt-4">
          <img
            src="https://avatar.iran.liara.run/public/30"
            alt="avatar"
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="font-medium">LTD</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
        />
      )}
    </>
  );
}
