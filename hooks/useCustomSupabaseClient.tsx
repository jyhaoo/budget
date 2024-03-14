import { SupabaseClient, useSupabaseClient } from "@supbase/auth-helpers-react";
import React from "react";
import { Database, GenericSchema } from "../type/schema";

export default function useCustomSupabaseClient() {
  return useSupabaseClient() as SupabaseClient<
    Database,
    "public",
    GenericSchema
  >;
}
