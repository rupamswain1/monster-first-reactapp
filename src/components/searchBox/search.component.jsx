import React from 'react';
import './searchBox.style.css';

export const SearchBar=({placeHolder,handleChange})=>{
    return (
        <input 
        key='searchMonster'
        type='search' 
        className='searchBox' 
        id='mosterSearch' 
        placeholder={placeHolder} onChange={handleChange}/>
    );
};