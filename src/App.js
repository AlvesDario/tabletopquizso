import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Mapa from './components/Mapa';
import Popup from './components/Popup';
import Perguntas from './perguntas.json';
import Dado from './components/Dado';

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
    temp: {
      player: {},
      pergunta: {},
      dado: 0,
    },
    map: [],
    perguntas: Perguntas,
    showPopup: false
  }
  
  componentDidMount = async () => {
    for(let x = 0; x<10; x++){
      this.state.map.push({ id: x, players: [] });
    }
    // this.state.map[0].players = this.state.players;
    console.log(this.state.map);
  }

  mudajogador = () => {
    this.state.players.push(this.state.temp.player);
    this.setState({ temp:{ player: this.state.players.pop() } });
  }

  // proxima casa
  caminha = (e, passos) => {
    this.state.players.map(p => {
      if(p.id===e.id)
        p.pos+=passos;
      return p.pos;
    });
  }

  updateDado = (newnum) => {
    console.log(newnum);
    this.setState({ temp: { dado: newnum } });
  }
  
  // toggle popup
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

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
            pergunta={this.state.perguntas[0]}
            responde={this.checkResposta}
            closePopup={this.togglePopup}
          />
          : null
        }
    </div>
    );
  }
}
