import React from 'react'
import Todo from '../Todo/Todo'
const TodoList = ({list, setList}) => {
    const deleteTodo = (todo)=>{
        const updatedList = list.filter((t)=>t.id != todo.id);
        setList(updatedList)
    }
    const editTodo = (text,todo)=>{
        const updatedList = list.map((t)=>{
            if(t.id == todo.id){
                t.todoData = text;
            }
            return t;
        })
        setList(updatedList);
    }
    const setFinish = (isFinished,todo)=>{
        // todo.finished = isFinished // this will work but its React's principles of immutability. Also doesnot rerender component
        const updatedList = list.map((t)=>{
            if(t.id == todo.id){
                t.finished = isFinished;
            }
            return t;
        })
        setList(updatedList);
    }
  return (
    <div>
        {list.length > 0 &&
            list.map((todo)=><Todo key={todo.id} todoData={todo.todoData} isFinished = {todo.finished} changeFinished = {(isFinished)=>setFinish(isFinished, todo)} onEdit={(text)=>editTodo(text,todo)} onDelete={()=>deleteTodo(todo)}/>)
        }
    </div>
  )
}

export default TodoList
