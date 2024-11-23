import React from 'react'
import { VscClose } from "react-icons/vsc";

export const Todoitem = ({text , isComplete , id , finishTask , deleteTodo}) => {
  return (
    <div>
        <div className='task-list'>

<label className = {isComplete?'label':""} onClick={()=>finishTask(id)} > {text} </label>
<div className='remove' onClick={()=>deleteTodo(id)}>
  <VscClose />
</div> 
 
</div>
    </div>
  )
}
