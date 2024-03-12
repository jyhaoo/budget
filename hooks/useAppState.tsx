import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function useAppState() {
  const queryClient = useQueryClient();

  const getState = () => {
    return {
      isAddingExpense: false,
    };
  };

  return useQuery(
    {
      queryKey: ["state"],
      queryFn: getState,
    },
    queryClient
  );
}
