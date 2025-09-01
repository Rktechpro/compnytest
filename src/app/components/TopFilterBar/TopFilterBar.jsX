"use client";
import {
  Calendar,
  Users,
  ListFilter,
  UserCircle2,
  SlidersHorizontal,
} from "lucide-react";

export default function TopFilterBar() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-3 border-b shadow-sm gap-3">
      {/* Left side filters */}
      <div className="flex gap-2 items-center overflow-x-auto scrollbar-hide">
        <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm text-black shrink-0">
          <Calendar size={16} />
          Shift view
        </button>

        <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm text-black shrink-0">
          <Users size={16} />
          Staff view
        </button>

        <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm text-black shrink-0">
          <ListFilter size={16} />
          Status All
        </button>

        <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm text-black shrink-0">
          <UserCircle2 size={16} />
          Team All
        </button>

        <button className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline shrink-0">
          <SlidersHorizontal size={16} />
          Advanced filter
        </button>
      </div>

      {/* Right side buttons */}
      <div className="flex gap-2">
        <button className="px-4 py-2 text-black bg-gray-100 rounded-md text-sm">
          Week
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm shadow">
          Current Week
        </button>
      </div>
    </div>
  );
}
