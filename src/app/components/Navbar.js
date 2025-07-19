"use client";

import { useState } from "react";
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaFileAlt,
  FaBoxes,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="w-64 h-screen bg-white shadow-lg flex flex-col justify-between fixed">
      <div>
        <h1 className="text-3xl font-bold text-blue-600 tracking-wider p-6">
          Prawn care
        </h1>

        <nav className="flex flex-col gap-2 px-4">
          <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" />
          <SidebarItem icon={<FaShoppingCart />} label="Orders" />
          <SidebarDropdown
            icon={<FaFileAlt />}
            label="Reports"
            items={["Sales", "Purchasing", "Water Quality"]}
          />
          <SidebarItem icon={<FaBoxes />} label="Inventory" active />
          <SidebarItem icon={<FaCog />} label="Settings" />
        </nav>
      </div>

      <button className="flex items-center gap-3 text-gray-700 px-6 py-4 hover:bg-gray-100">
        <FaSignOutAlt />
        <span>Log Out</span>
      </button>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer ${
        active ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function SidebarDropdown({ icon, label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100"
      >
        <div className="flex items-center gap-3">
          {icon}
          <span>{label}</span>
        </div>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {open && (
        <div className="ml-10 mt-1 flex flex-col gap-1 text-sm text-gray-600">
          {items.map((item) => (
            <div
              key={item}
              className="px-2 py-2 rounded hover:bg-gray-200 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
