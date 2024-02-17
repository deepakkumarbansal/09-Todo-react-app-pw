const todoDelete = (todo) => ({type:'deleteTodo', payload:{todo}})
const todoEdit = (text, todo) => ({type:'editTodo', payload:{todo, todoText:text}})
const todoFinish = (isFinished, todo) => ({type:'finishTodo', payload:{isFinished,todo}})
const todoAdd = (inputText) => ({type : 'addTodo', payload:{todoText: inputText}})
export {
    todoDelete,
    todoEdit,
    todoFinish,
    todoAdd
}