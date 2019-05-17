import React, {Component} from 'react';
import p1 from "../imagens/p1.png";
import p2 from "../imagens/p2.png";
import img from '../imagens/pos.png';
import img0 from '../imagens/pos0.png';
import img1 from '../imagens/pos1.png';

export default class Pos extends Component {
    state = {
      stylePos:{},
    }

    
    render(){
        return(
        <div style={ stylePos }  >
          <h6 style={ h4Style }>{ this.props.pos.id+1 }</h6>
          { this.props.jog.map(p => (this.props.pos.id !== p.pos) ? null : 
            (p.id === 1) ? 
                (<img src={p1} alt="jogador 1" width="35px" height="60px" style={{display: "inline"}} key="1"/>):
                (<img src={p2} alt="jogador 2" width="35px" height="60px" style={{display: "inline"}} key="2"/>)
              )}
        </div>
        );
    }
}

let h4Style = {
  font: "normal 1.2em 'Trebuchet MS', Helvetica, sans-serif",
  color: "rgba(255,255,255,1)",
  textShadow: "3px 1px 4px rgba(0,0,0,0.8)",
  marginTop: "0px",
  marginBottom: "0px",
}

// let stylep = {
//   font: 'normal normal bold 12px "Lucida Sans Unicode", "Lucida Grande", sans-serif',
//   color: 'rgba(255,255,255,1)',
//   textAlign: 'center',
//   marginTop: "0px",
//   marginBottom: "0px",
//   // paddingTop: "0px",
//   // paddingBottom: "0px"
// }

let stylePos={
  backgroundImage: "url("+img+")",
  padding: '10px',
  background: 'rgba(25,25,25,0.3)',
  border: '3px solid rgba(255,255,102,0.5)',
  display: 'inline-block',
  width: '80px',
  height: '80px',
  margin: '1px',
  borderRadius: '10px',
}