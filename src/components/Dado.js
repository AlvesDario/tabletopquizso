import React, {Component} from 'react';

export default class Dado extends Component{
    render(){
        let newnum = Math.floor(Math.random()*6)+1;
        return(
        <div>
            <h4 style={{display: "inline"}}>Dado: </h4>
            <button onClick={this.props.onClick.bind(this, newnum)}>{this.props.num}</button>
        </div>
        );
    }
}