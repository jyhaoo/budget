import {
  HiOutlineChartPie,
  HiOutlineMegaphone,
  HiOutlinePlus,
} from "react-icons/hi2";
import cn from "../utils/cn";

export default function BottomNaviation() {
  return (
    <div className="fixed bottom-0  w-lg h-18 grid grid-cols-3 bg-white dark:bg-black px-8 sm:px-0 pb-5 border-t pt-5 z-10 dark:border-zinc-600">
      <button>
        <div className="flex justify-center items-center flex-col group cursor-pointer">
          <div
            className={cn(
              "flex items-center flex-col  justify-center text-black dark:text-white"
            )}
          >
            <HiOutlineChartPie className="h-6 w-6 group-hover:scale-125 transition-all " />
            <span className="text-sm ">Analytic</span>
          </div>
        </div>
      </button>
      <AddExpenseNav />
      <button>
        <div className="flex justify-center items-center flex-col group cursor-pointer">
          <div
            className={cn(
              "flex items-center flex-col  justify-center text-black dark:text-white"
            )}
          >
            <HiOutlineMegaphone className="h-6 w-6 group-hover:scale-125 transition-all" />
            <span className="text-sm">Change logs</span>
          </div>
        </div>
      </button>
    </div>
  );
}

const AddExpenseNav = ({ openExpense }: { openExpense: () => void }) => {
  return (
    <button className="flex justify-center items-center flex-col group cursor-pointer">
      <div className="h-12 w-12 bg-yellow-200 group-hover:bg-yellow-300 rounded-full grid place-content-center shadow-sm transition-all groupgroup-hover:hover:text-black dark:text-black dark:bg-yellow-300">
        <HiOutlinePlus className="h-8 w-8 hover:scale-125 transition-all" />
      </div>
    </button>
  );
};
