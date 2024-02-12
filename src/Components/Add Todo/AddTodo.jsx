import React, { useContext, useState } from 'react'
import TodoContext from '../../context/TodoContext';

const AddTodo = () => {
    const [list,setList] = useContext(TodoContext);
    const [inputText, setInputText] = useState('')
  return (
    <>
     <input type="text" placeholder='Add todo here...' value={inputText} onChange={(e)=>{setInputText(e.target.value)}}/> 
     <button onClick={()=>{
        setList([...list, {id: list.length+1, todoData: inputText, finished: false}])
        setInputText('')
     }}>Add Todo</button>
    </>
  )
}

export default AddTodo
