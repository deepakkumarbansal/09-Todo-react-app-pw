import { useContext, useState } from 'react'
import './App.css'
import TodoList from './Components/Todo List/TodoList'
import AddTodo from './Components/Add Todo/AddTodo'
import TodoContextProvider from './context/TodoContextProvider'
import TodoContext from './context/TodoContext'

function App() {
  return (
    <TodoContextProvider>
      <AddTodo/>
      <TodoList/>
    </TodoContextProvider>
  )
}

export default App
