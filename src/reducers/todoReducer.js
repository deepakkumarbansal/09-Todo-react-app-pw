const initialState = [
    {id:1, todoData: "todoText", finished: false}
]

function todoReducer(state=initialState, action){
    if(action.type == 'addTodo'){
        const todoText = action.payload.todoText;
        return [
            ...state, {id: state.length+1, todoData: todoText, finished: false}
        ]
    } 
    else if(action.type == 'editTodo'){
        const todo = action.payload.todo;
        const todoText = action.payload.todoText;
        const updatedList = state.map((t)=>{
            if(t.id == todo.id){
                t.todoData = todoText;
            }
            return t;
        })
        return updatedList;
    } 
    else if(action.type == 'deleteTodo'){
        const todo = action.payload.todo;
        const updatedList = state.filter((t)=>t.id != todo.id);
        return updatedList;
    }
    else if(action.type == 'finishTodo'){
        const todo = action.payload.todo;
        const isFinished = action.payload.isFinished;
        const updatedList = state.map((t)=>{
            if(t.id == todo.id){
                t.finished = isFinished;
            }
            return t;
        })
        return updatedList
    }
    return state //most important
}

export default todoReducer