import { useState } from 'react'
import './App.css'
import TodoList from './Components/Todo List/TodoList'
import AddTodo from './Components/Add Todo/AddTodo'

function App() {
  const [list, setList] = useState([
    {id:1, todoData: 'todo1', finished: true},
    {id:2, todoData: 'todo2', finished: false}
  ])

  return (
    <>
     <AddTodo updateList={(data)=>{setList([...list, {id: list.length+1, todoData: data, finished: false}])}}/>
     <TodoList list = {list} setList={setList}/>
    </>
  )
}

export default App
