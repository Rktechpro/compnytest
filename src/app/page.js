
import { ShiftCalendar } from "@/app/components/ShiftCalendar/ShiftCalendar";

 const Page = () => {
  return (
    <div>
      <ShiftCalendar />
      {/* Floating Action Button */}
     {/* Floating Add Button */}
      <button className="fixed bottom-6 right-6 bg-sky-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-2xl">
        +
      </button>
    </div>
  );
}
export default Page;

