import React from 'react';
import { visibilityFilters } from '../actions';
import FilterLink from '../containers/FilterLink';

//Filters of ALL Active and Completed

const Filters = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={visibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
);

export default Filters;