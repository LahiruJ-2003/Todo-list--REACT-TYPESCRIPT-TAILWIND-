
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import { dummyData } from "./data/todos";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const[todos, setTodos] = useState(dummyData);

function setTodoCompleted (id: number, completed: boolean) {
  setTodos((prevTodos) => 
prevTodos.map((todo) => (todo.id === id ? {...todo, completed} : todo))
  );
}  

function addTodo(title: string){
setTodos((prevTodos) => [
  {
    id: prevTodos.length + 1,
    title,
    completed: false,
  },
  ...prevTodos,
]);
}
  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center"> Your Todos</h1>
      <div className="max-w-lg mx-auto bg-gray-200 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList todos={todos} onCompletedChange={setTodoCompleted}
         />
        </div>
    </main>
    
  );
}

export default App;
