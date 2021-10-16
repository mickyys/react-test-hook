
const initialState=[{
    id:1,
    todo:'Comprar pan',
    donde:false
}]

const todoReducer = (state = initialState, action) => {
    switch (action?.type) {
        case 'add':
            return [...state, action.payload];               
        default:
            break;
    }
    return state;
}

const todos = todoReducer();

const newTodo = {
    id:2,
    todo:'Comprar agua',
    donde:false
};

const action = {
    type:'add',
    payload:newTodo
}


console.log('Hola Mundo', todoReducer(todos, action) );