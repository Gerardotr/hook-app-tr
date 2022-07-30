
const initialStete = [
    {
        id: 1,
        todo: 'Pagar universidad',
        done: false
    }
]


const todoReducer = (state = initialStete, action) => {
    if(action?.type === 'agregar') {
        return [...state, action.payload]
    }
    return state;
}

let todos = todoReducer();

const newTodo =  {
    id: 2,
    todo: 'Pagar carro',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction)


console.log(todos)