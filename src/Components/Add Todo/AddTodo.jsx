import React, { useContext, useEffect, useReducer, useState } from 'react'
import { TodoDispatchContext } from '../../context/TodoDispatchContext';

const AddTodo = () => {
    const {list, dispatch} = useContext(TodoDispatchContext)
    const [inputText, setInputText] = useState('');
    useEffect(()=>{
      console.log(list);
    },[list])
  return (
    <>
     <input type="text" placeholder='Add todo here...' value={inputText} onChange={(e)=>{setInputText(e.target.value)}}/> 
     <button onClick={()=>{
        dispatch({type : 'addTodo', payload:{todoText: inputText}})
        setInputText('')
     }}>Add Todo</button>
    </>
  )
}

export default AddTodo
