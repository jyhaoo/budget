import {
  SupabaseClient,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { Database, GenericSchema } from "../type/schema";

export default function useCustomSupabaseClient() {
  return useSupabaseClient() as SupabaseClient<
    Database,
    "public",
    GenericSchema
  >;
}
