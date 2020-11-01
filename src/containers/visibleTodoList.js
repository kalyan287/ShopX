import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import {visibilityFilters, toggleTodo, handleRemoveTodo } from '../actions/';

const getvisibleTodos = (todos, filter) => {
    switch(filter) {
        case visibilityFilters.SHOW_ALL:
            return todos;
        case visibilityFilters.SHOW_COMPLETED:
            return todos.filter(task => task.completed);
        case visibilityFilters.SHOW_ACTIVE:
            return todos.filter(task => !task.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
}
const mapStateToProps = (state) => ({
    todos: getvisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    handleRemoveTodo: id => dispatch(handleRemoveTodo(id))
    
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);