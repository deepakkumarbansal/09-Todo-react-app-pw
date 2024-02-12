import React, { useState } from 'react'

const Todo = ({todoData, isFinished, changeFinished, onEdit, onDelete}) => {
    const [finished, setFinished] = useState(isFinished);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todoData);
    const editfunction = ()=>{
      setIsEditing(!isEditing);
      onEdit(editText);
    }
  return (
    <div>
      <input type="checkbox" checked={finished} onChange={(e)=>{
        console.log(finished, e.target.checked);
        setFinished(e.target.checked);
        changeFinished(e.target.checked);
      }}/>
      {
        (isEditing) ? <input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)} autoFocus/> : <span>{todoData}</span>
      }
      <button onClick={editfunction}>{(!isEditing) ? 'Edit' : 'Save'}</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Todo
