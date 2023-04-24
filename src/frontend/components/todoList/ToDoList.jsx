import "./todolist.css"
import TodoElement from "../todo/TodoElement";

const TodoList = ({todos, setTodos, setCheckId, color, removeTodoFromStorage}) => {
    return(
        <div className="TodoListContainer">
            <ul className="TodoList">
                {
                todos.length > 0 ?
                 todos.map((element) => {
                        return <TodoElement todoElementTitle={element.text}
                         id={element.id}
                         key={element.id}
                         todos={todos}
                         setTodos={setTodos}
                         setCheckId={setCheckId}
                         color={color}
                         removeTodoFromStorage={removeTodoFromStorage}/>
                    })
                    : null
                }
            </ul>
        </div>
    )
}

export default TodoList;