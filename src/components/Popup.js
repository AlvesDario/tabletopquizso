import React, {Component} from 'react';



export default class Popup extends Component {
    state={
        respostas: [],
        pergunta: "",
    }
    
    componentDidMount = () => {
        this.setState({
            pergunta: this.props.pergunta.pergunta,
            respostas: this.props.pergunta.respostas
        });
    }

    render() {
        console.log("pergunta: ", this.props.pergunta);
        return (
          <div className='popup' style={style['popup']}>
            <div className='popup_inner' style={style['popup_inner']}>
              <h1>{this.state.pergunta}</h1>
              <button onClick={this.props.responde.bind(this, this.state.pergunta, this.state.respostas)}>{this.state.respostas}</button>
              <button onClick={this.props.responde.bind(this, this.props.resposta1)}>{this.props.resposta1}</button>
              <button onClick={this.props.responde.bind(this, this.props.resposta2)}>{this.props.resposta2}</button>
              <button onClick={this.props.responde.bind(this, this.props.resposta3)}>{this.props.resposta3}</button>
            </div>
          </div>
        );
    }
}

let style={
    'popup': {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        margin: 'auto',
        backgroundColor: 'rgba(0,0,0, 0.5)',
      },
      'popup_inner': {
        position: 'absolute',
        left: '25%',
        right: '25%',
        top: '25%',
        bottom: '25%',
        margin: 'auto',
        background: 'white',
      }
}