import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.component';

export const CardList=props=>{   
 return(
    <div className='cardListMain'>{
    props.pocketMonsters.map(pocketMonsters=>
        <Card monster={pocketMonsters}/>
        )}
    </div>);
};
