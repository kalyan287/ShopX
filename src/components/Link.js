import React from 'react';

//To make disable the filter which we selected and children other than that will be active to choose.

const Link =({active, onClick, children}) => (
    <button onClick ={onClick} disabled={active} style={{ marginLeft:'4px'}}>
        {children}
    </button>
);

export default Link;