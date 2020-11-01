let nextTodoId = 0;

//create an id for new todo and intrement for next 
export const addTodo = text =>({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

//recive the id of element need to be toggle
export const toggleTodo = id =>({
    
    type:'TOGGLE_TODO',
    id
})

//recieve the id of element need to be delete
export const handleRemoveTodo = id => ({
    type:'REMOVE_TODO',
    id
})

//create the visibility filters and assign then as per the input from buttons clicked
export const visibilityFilters = {
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETED:'SHOW_COMPLETED',
    SHOW_ACTIVE:'SHOW_ACTIVE'
}

//it will set the visibility component as per the filter selected.
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});