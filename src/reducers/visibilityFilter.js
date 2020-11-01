import {visibilityFilters} from '../actions';


//will set a visibility of component as filter selected and default filter is SHOW_ALL
const visibilityFilter = (state = visibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;
