import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Mapa from './components/Mapa';
import Popup from './components/Popup';
import Perguntas from './perguntas.json';
// import { numberLiteralTypeAnnotation } from '@babel/types';

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
    showPopup: false
  }
  
  componentDidMount = async () => {
    for(let x = 0; x<10; x++){
      this.state.map.push({ id: x, players: [] });
    }
    this.state.map[0].players = this.state.players;
    console.log(this.state.map);
  }

  // proxima casa
  caminha = (e, passos) => {
    this.state.players.map(p => {
      if(p.id===e.id)
        p.pos+=passos;
      return p.pos;
    });
  }
  // toggle popup
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  checkResposta = (pergunta, resposta) => {
    this.togglePopup();
    if(pergunta.resposta === resposta)
      console.log("pode caminhar");
  }

  render(){
    console.log(this.state.perguntas);
    console.log("no app ", this.state.perguntas[1]);
    return(
    <div className="App">
      <Header/>
      {/* <Dado /> */}
      {/* Gera a tela de pergunta */}
      <button onClick={this.togglePopup.bind(this)}>show popup</button>
      
      <Mapa posicoes={this.state.map} update={this.caminha}/>
      {this.state.showPopup ? 
          <Popup
            pergunta={this.state.perguntas[0]}
            resposta1={this.state.perguntas[Math.floor(Math.random() * this.state.perguntas.length)]}
            resposta2={this.state.perguntas[Math.floor(Math.random() * this.state.perguntas.length)]}
            resposta3={this.state.perguntas[Math.floor(Math.random() * this.state.perguntas.length)]}
            responde={this.checkResposta}
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
    </div>
    );
  }
}
