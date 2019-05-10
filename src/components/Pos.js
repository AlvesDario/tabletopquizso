import React, {Component} from 'react';


export default class Pos extends Component {
    state={

    }
    render(){
        return(
            <div style={stylePos}>
                <h1>{this.props.players.id}</h1>
            </div>
        );
    }
}

let stylePos={
    padding: '20px',
    background: 'rgba(255,255,255, 0.3)',
    border: '2px #333 dotted',
}