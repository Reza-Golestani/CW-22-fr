
import './App.css'
import CreateForm from './components/CreateForm'
import TodoList from './components/TodoList'
import useGetTodos from './hooks/getTodos';

function App() {
  const {data} = useGetTodos();
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <CreateForm/>
      <TodoList data={data}/>
    </div>
      
  )
}

export default App
