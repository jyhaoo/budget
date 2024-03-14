import Redirect from "@/components/Redirect";
import SiteLayout from "@/components/SiteLayout";
import Chart from "@/components/summary/Chart";
import TotalSpent from "@/components/summary/TotalSpent";
import useExpenses from "@/hooks/useExpenses";
import { useUser } from "@supabase/auth-helpers-react";

export default function summary() {
  const user = useUser();
  const { data, isLoading } = useExpenses();

  //   if (!user) {
  //     return <Redirect to="/auth" />;
  //   }

  //   if (isLoading) {
  //     return <></>;
  //   }

  if (!data?.data?.length) {
    return <h1>You don't have any expenses yet.</h1>;
  }

  const totalSpent = data?.data[0].total_expense?.amount;
  return (
    <div className="min-h-screen w-full pt-14 flex flex-col pb-20">
      <TotalSpent spent={totalSpent || 0} />
      <Chart expenses={data.data} />
    </div>
  );
}
