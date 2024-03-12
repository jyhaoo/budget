import cn from "../utils/cn";
import useAppState from "../hooks/useAppState";
import AddExpense from "@/components/AddExpense";

export default function Home() {
  const { data } = useAppState();
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen relative w-full pb-20">
      <div
        className={cn(
          "sm:max-w-lg mx-auto bg-white dark:bg-black flex justify-center items-center relative",
          data?.isAddingExpense ? "overflow-hidden h-screen" : "min-h-screen"
        )}
      >
        <AddExpense />
        <div className="w-full">
          {/* <TotalExpense />
          <ListOfExpense /> */}
        </div>
      </div>
    </div>
  );
}
