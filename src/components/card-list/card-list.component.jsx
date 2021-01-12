import React from 'react';
import './card-list.style.css';

export const CardList=props=>{
   
return (
    <div className='cardListMain'>{
    props.pocketMonsters.map(pocketMonsters=><h1 key={pocketMonsters.id}>{pocketMonsters.name}</h1>
        )}
    </div>);
};
