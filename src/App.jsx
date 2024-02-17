import './App.css'
import TodoList from './Components/Todo List/TodoList'
import AddTodo from './Components/Add Todo/AddTodo'


function App() {
  return (
    // Now we don't need context api
    <>
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App
