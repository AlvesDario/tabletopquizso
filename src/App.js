import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Mapa from './components/Mapa';
import Popup from './components/Popup';
import Perguntas from './perguntas.json';
import Dado from './components/Dado';

var FOUN=0.1;

export default class App extends Component {
  state = {
    players: [
      {
        id: 2,
        pos: 0
      },
      {
        id: 1,
        pos: 0
      }
    ],
    temp: {
      player: {},
      pergunta: {},
      dado: 0,
    },
    map: [],
    perguntas: Perguntas,
    showPopup: false
  }
  
  // funções realizadas ao início
  componentDidMount = () => {
    for(let x = 1; x < 31; x++){
      let foun=0;
      if(x > 6 && x < 24){
        foun = Math.random() < FOUN ?
          1 : Math.random() < FOUN ?
           -1 : 0;
      }
      this.state.map.push({ 
        id: x, 
        players: [],
        foun: foun
      });
    }
    this.state.map[0].players = this.state.players;
    console.log(this.state.map);
  }

  // Troca o jogador atual para o próximo
  mudajogador = () => {
    this.state.players.unshift(this.state.temp.player);
    this.setState({ temp: { player: this.state.players.pop() } });
  }

  // move o jogador atual (passos)casas
  caminha = (passos) => {
    let newpos = this.state.temp.player+passos;
    this.setState({temp: { player: newpos } });
  }

  // atualiza o número do dado na variável temp
  updateDado = (newnum) => {
    console.log(newnum);
    this.setState({ temp: { dado: newnum } });
  }
  
  // toggle popup
  togglePopup() {
    this.setState({
      temp:{
        pergunta: this.state.perguntas[Math.floor(Math.random() * this.state.perguntas.length)]
      }
    });
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  // Verifica resposta
  checkResposta = (pergunta, resposta) => {
    this.togglePopup();
    if(pergunta.resposta === resposta){
      console.log("pode caminhar");console.log(resposta);
    }
  }

  render(){
    return(
    <div className="App">
      <Header/>
      <Dado onClick = { this.updateDado } num = { this.state.temp.dado }/>
      {/* Gera a tela de pergunta */}
      <button onClick={this.togglePopup.bind(this)}>show popup</button>
      
      <Mapa posicoes={this.state.map} update={this.caminha}/>
      {this.state.showPopup ? 
          <Popup
            pergunta={this.state.temp.pergunta}
            responde={this.checkResposta}
            closePopup={this.togglePopup}
          />
          : null
        }
    </div>
    );
  }
}
