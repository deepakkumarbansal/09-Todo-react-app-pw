import React, {useState } from 'react'
import {useDispatch} from 'react-redux'
import { todoAdd } from '../../actions/todoActions';
const AddTodo = () => {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch(); //it is bad practice b/c exposing dispatch to components
  return (
    <>
     <input type="text" placeholder='Add todo here...' value={inputText} onChange={(e)=>{setInputText(e.target.value)}}/> 
     <button onClick={()=>{
        dispatch(todoAdd(inputText))
        setInputText('')
     }}>Add Todo</button>
    </>
  )
}

export default AddTodo
