import React from 'react';
import './Searchbox.styles.scss';

export const SearchBox = ({placeholder, handleChange}) => {
    return <div className='search-box'>
                <input type='search' 
                       placeholder={placeholder}
                       onChange={handleChange} />
            </div>
} 