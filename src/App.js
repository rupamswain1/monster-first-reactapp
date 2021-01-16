import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBar} from './components/searchBox/search.component';

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
        <h1 id='pageTitle'>Monster Rolodex</h1>
        <SearchBar placeHolder='Search Monster' handleChange={e=>this.setState({searchMonster:e.target.value})}></SearchBar>
        <CardList pocketMonsters={filteredMonster}></CardList>      
      </div>
    );
  }
}

export default App;
