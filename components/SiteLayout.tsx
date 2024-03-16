import useAppState from "@/hooks/useAppState";
import cn from "@/utils/cn";
import BottomNavigation from "./BottomNavigation";
import Navigation from "./Navigation";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = useAppState();
  return (
    <div
      className={cn(
        "bg-gray-50 dark:bg-gray-900 min-h-screen relative",
        data?.isAddingExpense ? "overflow-hidden h-screen" : ""
      )}
    >
      <Navigation />
      <div className="sm:max-w-lg mx-auto bg-white dark:bg-black px-5 flex justify-center items-center relative min-h-screen ">
        {children}
        <BottomNavigation />
      </div>
    </div>
  );
}
