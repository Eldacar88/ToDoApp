import './App.css';

import Header from './frontend/components/header/Header';
import TodoList from './frontend/components/todoList/ToDoList';
import TodoInputField from './frontend/components/input/TodoInputfield';
import Colorchanger from './frontend/components/colorchanger/Colorchanger';

import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import useLocalStorage from './frontend/components/customHooks/useLocalStorage';

const LOCAL_STORAGE_KEY = 'todos';
/*const todoListInput = [{
                        text:"Einkaufen",
                        id: uuidv4(),
                        done:false
                      },
                      {
                        text:"Laufen",
                        id: uuidv4(),
                        done:false
                      },
                      {
                        text:"Fahrrad",
                        id: uuidv4(),
                        done:false
                      },
                      {
                        text:"TodoListe schreiben",
                        id: uuidv4(),
                        done:false
                      }
               ];*/

function App() {
  const [todos, setTodos, removeTodoFromStorage] = useState([]);
  //const [todos, setTodos, removeTodoFromStorage] = useLocalStorage(LOCAL_STORAGE_KEY);
  const [checkedId, setCheckId] = useState("");
  const [color, setColor] = useState("lightcoral");

  return (
    <div className="App">
      <div className='Frame'>
          <Header headerTitle={"Todo App"}/>

          <Colorchanger color={color} 
              setColor={setColor}/>

          <TodoList 
              todos={todos} 
              setTodos={setTodos} 
              setCheckId={setCheckId} 
              color={color}
              removeTodoFromStorage={removeTodoFromStorage}/>

          <TodoInputField 
              todoInputFieldLabel={"ToDo"}
              addButtonTitle={"Add"}
              changeButtonTitle={"Change"}
              clearButtonTitle={"Clear All"}
              todos={todos}
              setTodos={setTodos}
              checkedId={checkedId}/>

      </div>
    </div>
  );
}

export default App;
