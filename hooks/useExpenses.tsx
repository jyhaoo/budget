import { PostgrestResponse } from "@supabase/supabase-js";
import {
  useQuery,
  UseQueryResult,
} from "@/node_modules/@tanstack/react-query/build/legacy/useQuery";
import useCustomSupabaseClient from "./useCustomSupabaseClient";
import { getDate } from "@/utils/getDate";
import { useQueryClient } from "@tanstack/react-query";
import { IExpense } from "@/type/index";

export default function useExpenses() {
  const queryClient = useQueryClient();
  const supabaseClient = useCustomSupabaseClient;
  const getExpenses = () => {
    const { firstDay, lastDay } = getDate();
    return supabaseClient
      .from("expense")
      .select(
        `
        *,
        tags (name), total_expense(amount)
        `
      )
      .lte("created_at", lastDay)
      .gte("created_at", firstDay)
      .order("created_at", { ascending: false });
  };

  return useQuery(
    { queryKey: ["expense"], queryFn: getExpenses },
    queryClient
  ) as UseQueryResult<PostgrestResponse<IExpense>, Error>;
}
