import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.component';

export const CardList=props=>{   
 return(
    <div className='cardListMain' key='cardList'>{
    props.pocketMonsters.map(pocketMonsters=>
        <Card key={pocketMonsters.id} monster={pocketMonsters}/>
        )}
    </div>);
};
