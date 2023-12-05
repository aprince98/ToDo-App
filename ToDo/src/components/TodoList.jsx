import styles from "../style.module.css"
import Todo from "./Todo"

const TodoList =({todoList, setTodoList}) => {
    return(
        <div>
            {todoList.map((todoItem)=>(
                <Todo 
                setTodoList={setTodoList}
                key={todoItem.id} 
                todoItem={todoItem} 
                todoList={todoList}>

                </Todo>
            ))}
        </div>
    )
}

export default TodoList 