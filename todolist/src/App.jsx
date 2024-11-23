import './App.css'
import React, { useState , useRef, useEffect } from 'react';
import { Todoitem } from './Todoitem';

function App() {

  const [todoList , SetTodoList] = useState(localStorage.getItem("todos")?
                                  JSON.parse(localStorage.getItem("todos")):[])

const inputRef = useRef();

// Update Local Storage
useEffect(() => {
localStorage.setItem("todos",JSON.stringify(todoList));
},[todoList])

// Add Task
const addTask = () => {
  const inputText = inputRef.current.value.trim();
  if(inputText === "") {
    return null;
  }
  const newTodo = {
    id : Date.now(),
    text: inputText,
    isComplete: false
  }
  SetTodoList((prev)=> [...prev, newTodo]);
  inputRef.current.value = "";
};

// Task Status
const finishTask = (id) => {
  SetTodoList((prev)=>{
    return prev.map((todo)=>{
      if(id==todo.id){
        return{...todo,isComplete:!todo.isComplete}
      }
      return todo;
    })
})
};
// Delete Task
const deleteTodo = (id) =>{
  SetTodoList((prev)=>{
    return prev.filter((todo)=> todo.id !== id);
  })
}

  return (
    <>
      <div className='header'>
          <h1> To-Do List </h1>
         <div className='task'>
         <div>
           <input ref={inputRef} className='input-task' placeholder='Add your task'></input>
          </div>
        <button className='add-task' onClick={addTask}> Add Task </button>
       </div>
        </div>
      <div className='footer'>
     <div className='item-container'>
      <p>List Of Tasks</p>
      {todoList.length===0?(<p className='notask'>No Task Found</p>):
      todoList.map((todo,index) => {
        return <Todoitem 
       
        text={todo.text}
        key={index} 
        isComplete={todo.isComplete} 
        id={todo.id}
        finishTask = {finishTask}
        deleteTodo = {deleteTodo}
       
       />
      })}
     </div>
     </div>
    </>

  )
}

export default App
