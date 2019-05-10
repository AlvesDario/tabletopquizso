import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Mapa from './components/Mapa';
import Perguntas from './perguntas.json';

export default class App extends Component {
  state = {
    players: [
      {
        id: 1,
        pos: 0
      },
      {
        id: 2,
        pos: 0
      }
    ],
    map: [],
    perguntas: Perguntas,
    
  }
  
  componentDidMount = async () => {
    for(let x = 0; x<10; x++){
      this.state.map.push({ id: x, players: [] });
    }
    this.state.map[0].players = this.state.players;
    console.log(this.state.map);
  }

  handleUpdate = (e) => {
    this.state.players.map((p)=>{
      if(p.id===e.id)
        p.pos++;
      return p.pos;
    });
  }

  render(){
    console.log(this.state.perguntas);
    return(
    <div className="App">
      <Header/>
      {/* <Dado /> */}
      <Mapa mapa={this.state.map} update={this.handleUpdate}/>
    </div>
    );
  }
}
