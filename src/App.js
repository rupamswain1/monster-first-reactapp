import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';

class App extends Component{
  constructor(){
    super();
    this.state={
      pocketMonsters: [],
      searchMonster:[]
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").
    then(response=>response.json()).
    then(users=>this.setState({pocketMonsters:users}));
  }
  render(){
    const{pocketMonsters,searchMonster}=this.state;
    const filteredMonster=pocketMonsters.filter(mon=>mon.name.toLowerCase().includes(searchMonster))
    return (
      <div className="App">
        <input type='search' className='searchBox' id='mosterIp' placeholder='Search Monster' onChange={e=>this.setState({searchMonster:e.target.value})}></input>
        <CardList pocketMonsters={filteredMonster}></CardList>      
      </div>
    );
  }
}

export default App;
