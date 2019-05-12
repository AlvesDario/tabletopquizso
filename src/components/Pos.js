import React, {Component} from 'react';


export default class Pos extends Component {
    state = {

    }

    render(){
        console.log("pos", this.props.players)
        return(
        <div style={stylePos}>
          <h6 style={{marginTop:"0px", marginBottom:'0px'}}>{this.props.pos.id}</h6>
          {this.props.pos.players.map(p => <p style={stylep} key={p.id}>Player: {p.id}</p>)}
        </div>
        );
    }
}

let stylep = {
    font: 'normal normal bold 12px "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    color: 'rgba(255,255,255,1)',
    textAlign: 'center',
}

let stylePos={
    padding: '10px',
    background: 'rgba(25,25,25,0.3)',
    border: '3px solid rgba(255,255,102,0.5)',
    display: 'inline-block',
    
    // boxSizing: border-box,
    width: '80px',
    height: '80px',
    margin: '1px',
    // padding: '1px,
    borderRadius: '10px',
    // -webkit-border-radius: 10px,
    // border-radius: 10px,
    
    
}