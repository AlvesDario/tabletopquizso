import React, {Component} from 'react';

export default class Popup extends Component {
    state={
        respostas: {},
        pergunta: {},
        temp: {},
    }
    
    componentDidMount = () => {
        this.setState({
            pergunta: this.props.pergunta,
        });
    }

    render() {
        console.log("pergunta: ", this.props.pergunta);

        return (
          <div className='popup' style={style['popup']}>
            <div className='popup_inner' style={style['popup_inner']}>
              <h1>Pergunta: </h1>
              <h2>{ this.props.pergunta.pergunta }</h2>
              <p>{ this.props.pergunta.respostas[0] }</p>
              <p>{ this.props.pergunta.respostas[1] }</p>
              <p>{ this.props.pergunta.respostas[2] }</p>
              <p>{ this.props.pergunta.respostas[3] }</p>

              <button onClick={this.props.responde.bind(this)}>A</button>
              <button onClick={this.props.responde.bind(this)}>B</button>
              <button onClick={this.props.responde.bind(this)}>C</button>
              <button onClick={this.props.responde.bind(this)}>D</button>
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