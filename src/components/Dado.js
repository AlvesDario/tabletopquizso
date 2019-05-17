import React, {Component} from 'react';

export default class Dado extends Component{
    render(){
        let newnum = Math.floor(Math.random()*6)+1;
        return(
        <div>
            <h4 style={h4Style}>Dado: </h4>
            <button onClick={this.props.onClick.bind(this, newnum)}>{this.props.num}</button>
        </div>
        );
    }
}

let h4Style = {
    display: "inline",
    font: "normal 1.2em 'Trebuchet MS', Helvetica, sans-serif",
    color: "rgba(255,255,255,1)",
    textShadow: "3px 1px 4px rgba(0,0,0,0.8)"
}