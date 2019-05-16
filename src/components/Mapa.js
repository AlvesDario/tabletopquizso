import React, {Component} from 'react';
import Posicao from './Pos';

export default class Mapa extends Component {
    state={
        posicoes: [],
    }
    componentDidMount = () => {
        this.setState({ "posicoes": this.props.posicoes });
    }
    render(){
        console.log("props mapa ", this.state.posicoes[0]);
        return(
            <div  style={{width: '700px', margin:'auto', display: 'block'}}>

                { this.state.posicoes.map(pos => 
                <Posicao pos = { pos } key = { pos.id } jog = {this.props.players} />) 
                }
            </div>
        );
    }
}