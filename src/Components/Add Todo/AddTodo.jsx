import React, { useState } from 'react'

const AddTodo = ({updateList}) => {
    const [inputText, setInputText] = useState('')
  return (
    <>
     <input type="text" placeholder='Add todo here...' value={inputText} onChange={(e)=>{setInputText(e.target.value)}}/> 
     <button onClick={()=>{
        updateList(inputText);
        setInputText('')
     }}>Add Todo</button>
    </>
  )
}

export default AddTodo
