import React, {useState } from 'react'
import {useDispatch} from 'react-redux'
const AddTodo = ({todoAdd}) => {
    const [inputText, setInputText] = useState('');

  return (
    <>
     <input type="text" placeholder='Add todo here...' value={inputText} onChange={(e)=>{setInputText(e.target.value)}}/> 
     <button onClick={()=>{
        todoAdd(inputText)
        setInputText('')
     }}>Add Todo</button>
    </>
  )
}

export default AddTodo
