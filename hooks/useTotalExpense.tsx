import { getDate } from "@/utils/getDate";
import { PostgrestResponse } from "@supabase/supbase-js";
import {
  useQuery,
  UseQueryResult,
  useQueryClient,
} from "@tanstack/react-query";
import { ITotalExpense } from "@/type/index";
import useCustomSupabaseClient from "./useCustomSupabaseClient";

export default function useTotalExpense() {
  const supabaseClient = useCustomSupabaseClient();
  const queryClient = useQueryClient();

  const getExpenses = () => {
    const { firstDay, lastDay } = getDate(false);
    return supabaseClient
      .from("total_expense")
      .select()
      .lte("created_at", lastDay)
      .gte("created_at", firstDay);
  };

  return useQuery(
    {
      queryKey: ["totalExpense"],
      queryFn: getExpenses,
    },
    queryClient
  ) as UseQueryResult<PostgrestResponse<ITotalExpense>, Error>;
}
