import TodoContext from "./TodoContext";

import React, { useState } from 'react'

const TodoContextProvider = ({children}) => {
    const [list, setList] = useState([
        {id:1, todoData: 'todo1', finished: true},
        {id:2, todoData: 'todo2', finished: false}
      ])
  return (
    <TodoContext.Provider value={[list, setList]}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
