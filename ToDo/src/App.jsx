import Header from "./components/Header"
import Form from "./components/Form"
import { useState } from "react"
import TodoList from "./components/TodoList";

function App() {
  const [todo,setTodo] = useState('');
  const [todoList, setTodoList] = useState ([]);

  return (
    <div className="App">
      <Header></Header>
      <Form 
      todo={todo} 
      setTodo={setTodo} 
      todoList={todoList} 
      setTodoList ={setTodoList}>

      </Form>
      <TodoList setTodoList={setTodoList} todoList={todoList}></TodoList>
    </div> 
  )
}

export default App
