import React, { useContext, useEffect } from 'react'
import Todo from '../Todo/Todo'
import { useSelector } from 'react-redux';
const TodoList = ({todoDelete, todoEdit, todoFinish}) => {
    const list = useSelector((state)=>state.todo);

    const deleteTodo = (todo)=>{
        todoDelete(todo)
    }
    const editTodo = (text,todo)=>{
        todoEdit(text, todo)
    }
    const setFinish = (isFinished,todo)=>{
        todoFinish(isFinished, todo)
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
