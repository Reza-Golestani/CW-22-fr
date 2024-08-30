import { TodoType } from "../assets/models/TodoModel";

type props = {
  Todo: TodoType;
};

const options: { year: string; month: string; day: string; hour: string; minute: string; second: string; hour12: boolean; timeZoneName?: string; } = {  
  year: 'numeric',  
  month: 'numeric',  
  day: 'numeric',  
  month: '2-digit',  
  day: '2-digit',  
  hour: '2-digit',  
  minute: '2-digit',  
  second: '2-digit',  
  hour12: false,  
  // timeZoneName: 'short'  
}; 

export default function TodoRow({ Todo }: props) {

  const createdDate = new Date(Todo.createdAt);
  const formattedCreatedDate = createdDate.toLocaleString('en-US', options)
  const deadlineDate = new Date(Todo.deadLine);
  const formattedDeadlineDate = deadlineDate.toLocaleString('en-US', options)

  return (
    <tr className="py-2 border-b-2 border-gray-500 w-full text-center">
      <td >{Todo.id}</td>
      <td className="max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis ">{Todo.title}</td>
      <td>{formattedCreatedDate}</td>
      <td>{formattedDeadlineDate}</td>
    </tr>
  );
}
