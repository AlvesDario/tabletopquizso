import React, {Component} from 'react';
import Posicao from './Pos';

export default class Mapa extends Component {
    state={

    }
    render(){
        return(
            <div>
                {this.props.mapa.map(pos => <Posicao pos={pos}/>)}
            </div>
        );
    }
}