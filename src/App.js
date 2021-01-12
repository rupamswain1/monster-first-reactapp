import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';

class App extends Component{
  constructor(){
    super();
    this.state={
      pocketMonsters: [
        // {
        //   name:"Pikachu",
        //   id:1
        // },
        // {
        //   name:"Bulbasaur",
        //   id:2
        // },
        // {
        //   name:"Charmander",
        //   id:3
        // },
        // {
        //   name:"Squirtel",
        //   id:4
        // },
      ]
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").
    then(response=>response.json()).
    then(users=>this.setState({pocketMonsters:users}));
  }
  render(){
    return (
      <div className="App">
        <CardList pocketMonsters={this.state.pocketMonsters}></CardList>      
      </div>
    );
  }
}

export default App;
