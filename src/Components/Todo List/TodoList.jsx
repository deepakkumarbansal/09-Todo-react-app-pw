import React, { useContext, useEffect } from 'react'
import Todo from '../Todo/Todo'
import { TodoDispatchContext } from '../../context/TodoDispatchContext';
const TodoList = () => {
    const {list,dispatch} = useContext(TodoDispatchContext);
    const deleteTodo = (todo)=>{
        dispatch({type:'deleteTodo', payload:{todo}})
    }
    const editTodo = (text,todo)=>{
        dispatch({type:'editTodo', payload:{todo, todoText:text}})
    }
    const setFinish = (isFinished,todo)=>{
        dispatch({type:'finishTodo', payload:{isFinished,todo}})
    }
    useEffect(()=>{
        console.log(list);
    },[list])
  return (
    <div>
        {list.length > 0 &&
            list.map((todo)=><Todo key={todo.id} todoData={todo.todoData} isFinished = {todo.finished} changeFinished = {(isFinished)=>setFinish(isFinished, todo)} onEdit={(text)=>editTodo(text,todo)} onDelete={()=>deleteTodo(todo)}/>)
        }
    </div>
  )
}

export default TodoList
