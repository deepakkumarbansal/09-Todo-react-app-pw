import React, { useContext, useEffect } from 'react'
import Todo from '../Todo/Todo'
import { useDispatch, useSelector } from 'react-redux';
import { todoDelete, todoEdit, todoFinish } from '../../actions/todoActions';
const TodoList = () => {
    const dispatch = useDispatch();
    const list = useSelector((state)=>state.todo);

    const deleteTodo = (todo)=>{
        dispatch(todoDelete(todo))
    }
    const editTodo = (text,todo)=>{
        dispatch(todoEdit(text, todo))
    }
    const setFinish = (isFinished,todo)=>{
        dispatch(todoFinish(isFinished, todo))
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
