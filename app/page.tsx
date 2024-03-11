import cn from "../app/utils/cn";
import AddExpense from "./ui/AddExpense";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen relative w-full pb-20">
      <div
        className={cn(
          "sm:max-w-lg mx-auto bg-white dark:bg-black flex justify-center items-center relative"
        )}
      ></div>
      <AddExpense />
    </div>
  );
}
