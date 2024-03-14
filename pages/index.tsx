import cn from "../utils/cn";
import { useUser } from "@supabase/auth-helpers-react";
import useAppState from "../hooks/useAppState";
import AddExpense from "@/components/AddExpense";
import TotalExpense from "@/components/TotalExpense";
import ListOfExpense from "@/components/ListOfExpense";
import Redirect from "@/components/Redirect";

export default function Home() {
  const user = useUser();
  const { data } = useAppState();
  if (!user) {
    return <Redirect to="/auth" />;
  }
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
          <TotalExpense />
          <ListOfExpense />
        </div>
      </div>
    </div>
  );
}
