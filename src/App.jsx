import './App.css'
import AddTodo from './Components/Add Todo/AddTodo'
import TodoList from './Components/Todo List/TodoList'
import {todoAdd, todoDelete, todoEdit, todoFinish} from './actions/todoActions'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'

function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators({todoDelete, todoEdit, todoFinish, todoAdd}, dispatch);
  return (
    <>
      <AddTodo todoAdd={actions.todoAdd}/>
      <TodoList todoDelete={actions.todoDelete} todoEdit={actions.todoEdit} todoFinish={actions.todoFinish}/>
    </>
  );
}

export default App
