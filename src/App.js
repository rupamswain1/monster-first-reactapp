import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

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
        <header className="App-header">
          {
            this.state.pocketMonsters.map(pocketMonsters=><h3 key={pocketMonsters.id}>{pocketMonsters.name}</h3>)
          }
        </header>
      </div>
    );
  }
}

export default App;
