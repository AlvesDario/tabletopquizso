import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Mapa from './components/Mapa';
import Popup from './components/Popup';
import Perguntas from './perguntas.json';
import Dado from './components/Dado';
import background from './imagens/background.jpeg';

var FOUN=0.2;

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
    temp_player: {},
    temp_pergunta: {},
    dado: 0,
    
    map: [],
    perguntas: Perguntas,
    showPopup: false
  }
  
  // funções realizadas ao início
  componentDidMount = async () => {
    for(let x = 0; x < 30; x++){
      let foun=0;
      
      if(x > 6 && x < 24){ foun=1
        // foun = Math.random() < FOUN ?
        //   1 : Math.random() < FOUN ?
        //    -1 : 0;
      }

      this.state.map.push({ 
        id: x, 
        foun: foun
      });
    }
    this.state.map[0].players = await this.state.players;
    await this.setState({ temp_player: this.state.players.pop() });
    console.log("mount",this.state.temp_player);
    console.log(this.state.map);
  }

  // Troca o jogador atual para o próximo
  mudajogador = async () => {
    this.state.players.unshift(this.state.temp_player);
    await this.setState({ temp_player: this.state.players.pop() });
  }

  tem_pergunta = (foun) => {
    if(foun!==0)this.caminha(6*foun);
  }

  // move o jogador atual (passos)casas
  caminha = (passos) => {
    if(this.state.temp_player.pos>=this.state.map.length)return alert("Fim do jogo");
    let newpos = this.state.temp_player;
    newpos['pos'] += passos;

    this.setState({ temp_player: newpos });

    //checa se na possição atual tem pergunta 
    if(this.state.map[newpos.pos].foun !== 0)
      this.togglePopup();
    this.mudajogador();
  }

  // atualiza o número do dado na variável temp
  updateDado = async (newnum) => {
    await this.setState({ dado: newnum });
    this.caminha(newnum);
  }
  
  // toggle popup e escolhe uma pergunta aleatória
  togglePopup() {
    this.setState({
      temp_pergunta: this.state.perguntas[
          Math.floor(Math.random() * this.state.perguntas.length)]
      }
    );
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  // Verifica resposta
  checkResposta = (r) => {
    this.togglePopup();
    // console.log(r," : ", Number.parseInt(this.state.temp.pergunta.resposta));
    if(Number.parseInt(this.state.temp_pergunta.resposta)===r){
      this.caminha(this.state.map[this.state.temp_player.pos].foun *  6);
    }
  }

  render(){
    // let jogadores=this.state.players;
    // jogadores.push(this.state.temp_player);
    return(
    <div className = "App" style={bckgrndStyle}>
      {/* <img src={background}/> */}
      <Header p={this.state.temp_player}/>
      <Dado onClick = { this.updateDado } num = { this.state.dado }/>
      {/* Gera a tela de pergunta */}
      {/* <button onClick={ this.togglePopup.bind(this) }>show popup</button> */}

      <Mapa posicoes = { this.state.map } update = { this.caminha } players = {this.state.players.concat(this.state.temp_player)} />
      { this.state.showPopup ? 
        <Popup
          pergunta = { this.state.temp_pergunta }
          responde = { this.checkResposta }
          closePopup = { this.togglePopup }
        />
        : null
      }
    </div>
    );
  }
}

let bckgrndStyle={
  backgroundImage: "url("+background+")",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}