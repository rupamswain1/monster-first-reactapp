import React from 'react';
import './card.style.css';
export const Card = props=>
{return(
   <div id={props.monster.id} className='card'>
       <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
       <h2 id={props.monster.id}>{props.monster.name}</h2>
       <h2 id={`email${props.monster.id}`}>{props.monster.email}</h2>
   </div>
)};