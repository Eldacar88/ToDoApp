import "./actionbutton.css"
import Button from '@mui/material/Button';
import { useRef } from "react";
import {v4 as uuidv4} from 'uuid';

const Actionbutton = ({actionButtonTitle, todos, setTodos, checkedId}) => {

    const inputRef = useRef("");

    const addTodo = () => {
        setTodos([...todos, {
            text: inputRef.current.value,
            id: uuidv4(),
            done: false
        }])
        //showNotification(`Added: ${newTodo}`, 'normal');
    }

    return (
        <Button variant="contained" id="Actionbutton" onClick={addTodo}>{actionButtonTitle}</Button>
    )
}

export default Actionbutton;