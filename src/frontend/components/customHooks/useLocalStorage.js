import { useState,useEffect } from "react";


//getItems from LocalStorage
const getItems = (localKey) => {
    if(localStorage.getItem(localKey) !== null) 
        return JSON.parse(localStorage.getItem(localKey))
    else 
        return []
}

// Schritt 2 und 3 Aufgabe 2.5
export default function useLocalStorage(keyVal) {
    const[todos, setTodos] = useState([]);
    const[count, setCount] = useState();

// Schritt 5 Aufgabe 2.5
/*useEffect(() => {
    if(!localStorage.getItem(keyVal)) {
        setCount(todos.length);
        localStorage.setItem(keyVal, JSON.stringify(todos))
        console.log(`Todos: ${typeof todos}`);
        }
    
         },[todos,keyVal])*/


//Schritt 6 Aufgabe 2.5
    useEffect(() => {
        if(count < 4 || !localStorage.getItem(keyVal)) {
            localStorage.setItem(keyVal,JSON.stringify(todos));
            setCount(todos.length)
            console.log(localStorage,count);
        }
    }, [todos,keyVal,count])

//Schritt 7 von Aufgabe 2.5
    window.addEventListener('load',() => {
        setCount(todos.length); 
    })

    useEffect(() => {
        const todosStore = getItems(keyVal);
        setTodos(todosStore)
    },[keyVal])

    // Schritt 8 Aufgabe 2.5
    const removeTodoFromStorage = (todosNew) => {
        localStorage.setItem(keyVal,JSON.stringify(todosNew))
    }

    return(todos, setTodos, removeTodoFromStorage);

}



