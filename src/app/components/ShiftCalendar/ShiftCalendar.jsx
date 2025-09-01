

"use client";
import React from "react";

const shifts = [
  {
    day: "Mon",
    date: "22",
    hoursEvent: "12h-1.2k",
    items: [
      {
        start: 9,
        end: 13,
        title: "09:00 - 13:00",
        duration: "4h",
        pay: "$880",
        confirmed: "8/8",
        avatars: [1, 2, 3, 4],
      },
    ],
  },
  {
    day: "Tue",
    date: "23",
    hoursEvent: "14h-1.5k",
    items: [
      {
        start: 8,
        end: 11.5,
        title: "08:00 - 11:30",
        duration: "3.5h",
        pay: "$880",
        confirmed: "8/8",
        avatars: [5, 6, 7],
      },
      {
        start: 12,
        end: 18,
        title: "12:00 - 18:00",
        duration: "6h",
        pay: "$880",
        confirmed: "8/8",
        avatars: [2, 4, 6],
      },
    ],
  },
  {
    day: "Wed",
    date: "24",
    hoursEvent: "10h-1k",
    items: [
      {
        start: 8.5,
        end: 17.5,
        title: "08:30 - 17:30",
        duration: "9h",
        pay: "$880",
        confirmed: "2/6",
        avatars: [1, 3],
      },
    ],
  },
  {
    day: "Thu",
    date: "25",
    hoursEvent: "12h-1.2k",
    items: [
      {
        start: 19,
        end: 31.5,
        title: "19:00 (Tue) - 12:00 (Wed)",
        duration: "12.5h",
        pay: "$880",
        confirmed: "8/8",
        avatars: [1, 2, 3, 4, 5],
      },
    ],
  },
  {
    day: "Fri",
    date: "26",
    hoursEvent: "8h-1.2k",
    items: [
      {
        start: 12.5,
        end: 18,
        title: "12:30 - 18:00",
        duration: "5.5h",
        pay: "$880",
        confirmed: "2/6",
        avatars: [6, 7],
      },
    ],
  },
];

export const ShiftCalendar = () => {
  const hours = Array.from({ length: 11 }, (_, i) => i + 8); // 08:00–18:00

  // Function to calculate shift card position and height
  const getShiftStyles = (start, end) => {
    const maxHour = 18; // Calendar ends at 18:00
    const minHour = 8; // Calendar starts at 08:00
    const adjustedStart = Math.max(start, minHour); // Clamp start to calendar range
    const adjustedEnd = Math.min(end, maxHour); // Clamp end to calendar range
    const top = (adjustedStart - minHour) * 64; // 64px per hour
    const height = (adjustedEnd - adjustedStart) * 64;
    return { top: `${top}px`, height: `${height}px` };
  };

  return (
    <main className=" bg-gray-50 p-2 sm:p-4">
      <div className="flex border rounded-xl bg-white w-full overflow-x-auto">
        {/* Time Column */}
        <div className="border-r bg-gray-50 text-xs sm:text-sm text-gray-600 sticky left-0 z-20 flex-shrink-0 w-14 sm:w-16 md:w-20">
          <div className="h-14 sm:h-16 border-b bg-gray-100 flex flex-col items-center justify-center font-medium px-1 text-center">
            <p className="font-bold">W33</p>
            <p className="text-[10px] sm:text-xs">$16.5k</p>
            <p className="hidden sm:block text-[10px] text-gray-700">weekly</p>
          </div>
          {hours.map((h) => (
            <div
              key={h}
              className="h-16 border-b flex items-start justify-center px-1 text-[10px] sm:text-xs"
            >
              {h}:00
            </div>
          ))}
        </div>

        {/* Days Section */}
        <div className="flex md:grid md:grid-cols-5 w-full">
          {shifts.map((day, idx) => (
            <div
              key={idx}
              className="relative border-r flex-shrink-0 w-36 sm:w-44 md:w-auto"
            >
              {/* Day Header */}
              <div className="sticky top-0 bg-gray-100 p-1 sm:p-2 text-center font-medium border-b z-10 text-[11px] sm:text-sm">
                <p className="font-bold text-black">{day.day}</p>
                <div className="text-lg sm:text-xl md:text-2xl text-black">{day.date}</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-800">
                  {day.hoursEvent}
                </div>
              </div>

              {/* Hour Slots */}
              {hours.map((h) => (
                <div key={h} className="h-16 border-b" />
              ))}

              {/* Shifts */}
              {day.items.map((shift, sIdx) => {
                const { top, height } = getShiftStyles(shift.start, shift.end);
                // Only render shifts that are within or partially within the visible time range
                if (shift.end <= 8 || shift.start >= 18) return null;
                return (
                  <div
                    key={sIdx}
                    className="absolute left-1 right-1 my-33 bottom-0 sm:left-2 sm:right-2 bg-white rounded-lg sm:rounded-xl shadow-md border p-1 sm:p-2 overflow-hidden"
                    style={{ top, height }}
                  >
                    <p className="text-[10px] sm:text-xs font-semibold truncate">
                      {shift.title}
                    </p>
                    <p className="text-[9px] sm:text-[11px] text-gray-600 truncate">
                      {shift.duration} • {shift.pay}
                    </p>
                    <div className="flex -space-x-1 sm:-space-x-2 mt-1">
                      {shift.avatars.map((a) => (
                        <img
                          key={a}
                          src={`https://i.pravatar.cc/30?img=${a}`}
                          alt="avatar"
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border"
                        />
                      ))}
                    </div>
                    <p className="text-[9px] sm:text-[11px] text-gray-500 mt-1 truncate">
                      {shift.confirmed} confirmed
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};