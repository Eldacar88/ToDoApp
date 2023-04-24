import "./todoInputfield.css"
import TextField from '@mui/material/TextField';
import {v4 as uuidv4} from 'uuid';
import { useRef } from "react";
import Button from '@mui/material/Button';

const TodoInputField = ({todoInputFieldLabel, addButtonTitle, changeButtonTitle, clearButtonTitle, todos, setTodos, checkedId}) => {
    const inputRef = useRef("");

    // 1. Schritt Aufgabe 2.5
    const getInput = () => {
      if(inputRef.current.value !== "") {
          const todoVal = inputRef.current.value;
          inputRef.current.value = "";
          return todoVal;
      } else {
          throw new Error("Missing Input!");
      }
  };



    const addTodo = () => {
      const newTodo = getInput();
      setTodos([...todos, {
          text: newTodo,
          id: uuidv4(),
          done: false
      }])
      console.log(inputRef.current.value);
      //showNotification(`Added: ${newTodo}`, 'normal');
  }

  const changeTodo = () => {
    if(checkedId !== "" && inputRef.current.value){
        setTodos([...todos],
            todos.filter(e => e.id === checkedId ? e.text = inputRef.current.value : null))
    }
    
}

      const clearAll = () => {
        setTodos(todos.filter(todoEl => null));
      }

    return(
      <div className="InputContainer">
        <TextField id="TodoInputfield" label={todoInputFieldLabel} variant="standard" name = "TodoInputfield"
        sx={{
            //width: '35vw'
          }}

          inputProps = {{style: {
            /*fontFamily: 'cursive',
            fontSize: '1.5em',
            textAlign: "center",*/
            
        }}}
          
        inputRef={inputRef}/>

        <div className="Buttonfield">
        <Button variant="contained" id="Actionbutton" onClick={addTodo}>{addButtonTitle}</Button>
        <Button variant="contained" id="Actionbutton" onClick={changeTodo}>{changeButtonTitle}</Button>
        <Button variant="contained" id="Actionbutton" onClick={clearAll}>{clearButtonTitle}</Button>
        </div>

      </div>
        
    )
}

export default TodoInputField