import React, { useState } from "react";  
import { TodoType } from "../assets/models/TodoModel";  
import usePostTodos from "../hooks/postTodo";  

export default function CreateForm() {  
  const [textInput, setTextInput] = useState("");  
  const [dateInput, setDateInput] = useState("");  

  const { mutate } = usePostTodos();   

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {  
    e.preventDefault();  
    
    const newTodo: TodoType = {  
      id: +new Date(),  
      title: textInput,  
      createdAt: Date.now().toString(),  
      deadLine: dateInput,  
    };  
    console.log(newTodo);
    
     
    mutate(newTodo);  

    setTextInput('');  
    setDateInput('');  
  }  

  return (  
    <form  
      className="flex items-center justify-center flex-col gap-4"  
      onSubmit={handleSubmit}  
    >  
      <div>Create Form</div>  
      <div className="flex gap-[100px]">  
        <input  
          className="border py-1 px-2 border-gray-400 rounded-md"  
          type="text"  
          value={textInput}  
          onChange={(e) => setTextInput(e.target.value)}  
        />  
        <input  
          className="border py-1 px-2 border-gray-400 rounded-md"  
          type="date"  
          value={dateInput}  
          onChange={(e) => setDateInput(e.target.value)}  
        />  
      </div>  
      <input type="submit" value={"Create"} />  
    </form>  
  );  
}