import { useQuery } from "@tanstack/react-query";
import { getAPI } from "../api/getAPI";

export default function useGetTodos() {
  return useQuery({
    queryKey: ["getTodos"],
    queryFn: getAPI,
  });
}
