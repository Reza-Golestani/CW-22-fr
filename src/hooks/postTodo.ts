import { useMutation, useQueryClient} from "@tanstack/react-query";
import { postAPI } from "../api/postAPI";
import { TodoType } from "../assets/models/TodoModel";

export default function usePostTodos() {
    const qc= useQueryClient()
  return useMutation({
    mutationKey: ["postTodo"],
    mutationFn: (newTodo:TodoType)=> postAPI(newTodo),
    onSuccess: ()=>{qc.invalidateQueries({queryKey:["getTodos"]})}
  });
}
