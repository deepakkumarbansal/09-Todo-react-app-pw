import { useContext, useReducer, useState } from 'react'
import './App.css'
import TodoList from './Components/Todo List/TodoList'
import AddTodo from './Components/Add Todo/AddTodo'
import {TodoDispatchContext} from './context/TodoDispatchContext'
import todoReducer from './reducers/todoReducer'

function App() {
  const initialState = [
    { id: 1, todoData: "todo1", finished: true },
    { id: 2, todoData: "todo2", finished: false },
  ];
  const [list, dispatch] = useReducer(todoReducer, initialState)
  return (
    <TodoDispatchContext.Provider value={{ list, dispatch }}>
      <AddTodo />
      <TodoList />
    </TodoDispatchContext.Provider>
  );
}

export default App
