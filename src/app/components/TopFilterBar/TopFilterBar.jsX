// "use client";
// import {
//   Calendar,
//   Users,
//   ListFilter,
//   UserCircle2,
//   SlidersHorizontal,
// } from "lucide-react";
// export default function TopFilterBar() {
//   return (
//     <div className="flex items-center justify-between bg-white p-3 border-b shadow-sm">
//       {/* Left side filters */}
//       <div className="flex gap-3 items-center">
//         <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm text-black cursor-pointer">
//           <Calendar size={16} />
//           Shift view
//         </button>

//         <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm text-black cursor-pointer">
//           <Users size={16} />
//           Staff view
//         </button>

//         <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm text-black cursor-pointer">
//           <ListFilter size={16} />
//           Status All
//         </button>

//         <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm text-black cursor-pointer">
//           <UserCircle2 size={16} />
//           Team All
//         </button>

//         <button className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline cursor-pointer">
//           <SlidersHorizontal size={16} />
//           Advanced filter
//         </button>
//       </div>

//       {/* Right side buttons */}
//       <div className="flex gap-2">
//         <button className="px-4 py-2 cursor-pointer  text-black bg-gray-100 rounded-md text-sm">
//           Week
//         </button>
//         <button className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-md text-sm shadow">
//           Current Week
//         </button>
//       </div>
//     </div>
//   );
// }

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
    <div className="flex items-center justify-between bg-white p-2 sm:p-3 border-b shadow-sm max-w-full mx-auto">
      {/* Left side filters */}
      <div className="flex gap-2 sm:gap-3 items-center overflow-x-auto flex-nowrap whitespace-nowrap">
        <button
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-xs sm:text-sm text-black transition-colors"
          aria-label="Switch to shift view"
        >
          <Calendar size={14} className="sm:w-4 sm:h-4" />
          Shift view
        </button>

        <button
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-xs sm:text-sm text-black transition-colors"
          aria-label="Switch to staff view"
        >
          <Users size={14} className="sm:w-4 sm:h-4" />
          Staff view
        </button>

        <button
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-xs sm:text-sm text-black transition-colors"
          aria-label="Filter by status"
        >
          <ListFilter size={14} className="sm:w-4 sm:h-4" />
          Status All
        </button>

        <button
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-xs sm:text-sm text-black transition-colors"
          aria-label="Filter by team"
        >
          <UserCircle2 size={14} className="sm:w-4 sm:h-4" />
          Team All
        </button>

        <button
          className="flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 text-blue-600 text-xs sm:text-sm font-medium hover:underline"
          aria-label="Open advanced filter"
        >
          <SlidersHorizontal size={14} className="sm:w-4 sm:h-4" />
          Advanced filter
        </button>
      </div>

      {/* Right side buttons */}
      <div className="flex gap-2 flex-shrink-0">
        <button
          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-md text-xs sm:text-sm text-black hover:bg-gray-200 transition-colors"
          aria-label="Select week view"
        >
          Week
        </button>
        <button
          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-md text-xs sm:text-sm shadow hover:bg-blue-700 transition-colors"
          aria-label="Select current week"
        >
          Current Week
        </button>
      </div>
    </div>
  );
}