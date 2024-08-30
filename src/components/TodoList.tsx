//import useGetTodos from "../hooks/getTodos";
import TodoRow from "./TodoRow";

export default function TodoList({data}:any) {
  //const {data} = useGetTodos();

  return (
    <table className="border-collapse w-full">
      <thead className="border-b-2">
        <th className="py-4 px-4">#</th>
        <th className="px-4">Title</th>
        <th>Created at</th>
        <th>Deadline</th>
      </thead>
      <tbody className="w-full">{
        data?.map(todo => <TodoRow key={todo.id} Todo={todo}/>)
        }</tbody>
    </table>
  );
}
