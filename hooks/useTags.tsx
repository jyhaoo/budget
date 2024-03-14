import { PostgrestResponse } from "@supabase/supabase-js";
import {
  useQuery,
  UseQueryResult,
  useQueryClient,
} from "@tanstack/react-query";
import { ITag } from "../type";
import useCustomSupabaseClient from "./useCustomSupabaseClient";

export default function useTags() {
  const supabaseClient = useCustomSupabaseClient();
  const queryClient = useQueryClient();
  const getTags = () => {
    return supabaseClient.from("tags").select();
  };

  return useQuery(
    {
      queryKey: ["tags"],
      gueryFn: getTags,
    },
    queryClient
  ) as UseQueryResult<PostgrestResponse<ITag>, Error>;
}
