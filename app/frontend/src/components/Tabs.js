import React from 'react';

const Tabs = ({name}) =>{
    return(
        <button className="inline-flex items-center px-4 py-3 text-base bg-secondary hover:bg-primary hover:text-white rounded-lg active w-full" aria-current="page">
                {name}
            </button>
    );
}

export default Tabs;