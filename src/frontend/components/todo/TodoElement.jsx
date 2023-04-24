import "./todoelement.css"
import {FcFullTrash} from 'react-icons/fc'
import { IconContext } from 'react-icons'
import { Checkbox } from '@mui/material'
import {AiFillCheckCircle} from 'react-icons/ai'

const TodoElement = ({todoElementTitle, todos, setTodos, id, setCheckId, color, removeTodoFromStorage}) => {

    const deleteTodo = (element) => {
        setTodos(todos.filter(todoEl => todoEl.id !== id ? todoEl : null));
        //setTodos(todos.filter(element => element.id !== id));
        //removeTodoFromStorage(todos);
      }

    const checkTheBox = (element) => {
        if(element.target.checked)
            setCheckId(id);
        else if(!element.target.checked)
            setCheckId("")
    }

    const toggleDone = (e) => {
        setTodos(todos.map((el) => {
            if(el.id === id) {
                el.done = !el.done;
                
            }
            return el;
        }))
      }

    return(
        <div>        
            <div className="ToDoElementContainer">
                <Checkbox onChange={checkTheBox}/>

                <li className="TodoElement" style={{
                color: color
                }}
                id={id}>

                <IconContext.Provider value={{className: 'toggleDone'}}>
                    <AiFillCheckCircle onClick={toggleDone}/>
                </IconContext.Provider>

                    {todoElementTitle}</li>
                <IconContext.Provider value={{ className: 'deleteTodo', size:'45px'}}>
                    <FcFullTrash onClick={deleteTodo}/>
                </IconContext.Provider>
            </div>
            
        </div>
    )
}
 export default TodoElement