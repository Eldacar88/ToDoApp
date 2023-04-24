import "./frame.css"
import Header from "../header/Header";
import TodoList from "../todoList/ToDoList";
import TodoInputField from "../input/TodoInputfield";
import Colorchanger from "../colorchanger/Colorchanger";

const Frame = ({headerTitle,
                 color, setColor,
                 todoListInput, todos, setTodos, setCheckId,
                 todoInputFieldLabel, addButtonTitle, changeButtonTitle, clearButtonTitle, checkedId}) => {
    return(
        <div className="Frame">
            <Header headerTitle={headerTitle}/>

            <Colorchanger color={color} 
                setColor={setColor}/>

            <TodoList todoListInput={todoListInput}
                todos={todos} 
                setTodos={setTodos} 
                setCheckId={setCheckId} 
                color={color}/>

            <TodoInputField 
                todoInputFieldLabel={todoInputFieldLabel}
                addButtonTitle={addButtonTitle}
                changeButtonTitle={changeButtonTitle}
                clearButtonTitle={clearButtonTitle}
                todos={todos}
                setTodos={setTodos}
                checkedId={checkedId}
             />
            
        </div>
    )
}

export default Frame;