import React, {Component} from 'react';

export default class Popup extends Component {
    state={
        respostas: {},
        pergunta: {},
        temp: {},
        r:null,
    }
    
    componentDidMount = () => {
        this.setState({
            pergunta: this.props.pergunta,
        });
    }

    rsp = (r) => {
      console.log(r);
      this.setState({r: r});
    }

    render() {
        let { r } = this.state;

        return (
          <div className='popup' style={style['popup']}>
            <div className='popup_inner' style={style['popup_inner']}>
              <h1>Pergunta: </h1>
              <h2>{ this.props.pergunta.pergunta }</h2>
              <form onSubmit={this.props.responde.bind(this, r)} >
                <label style={{display: 'block'}}>
                  <input type="radio" name="resposta" value="0" onChange={()=>this.rsp(0)}/>{ this.props.pergunta.respostas[0] }
                </label>
                <label style={{display: 'block'}}>
                  <input type="radio" name="resposta" value="1" onChange={()=>this.rsp(1)}/>{ this.props.pergunta.respostas[1] }
                </label>
                <label style={{display: 'block'}}>
                  <input type="radio" name="resposta" value="2" onChange={()=>this.rsp(2)}/>{ this.props.pergunta.respostas[2] }
                </label>
                <label style={{display: 'block'}}>
                  <input type="radio" name="resposta" value="3" onChange={()=>this.rsp(3)}/>{ this.props.pergunta.respostas[3] }
                </label>
                <button type="submit">Confirmar</button>
              </form>
{/*               

              <p>A) </p>
              <p>B) </p>
              <p>C) </p>
              <p>D) </p>

              <button onClick={this.rsp(0)}>A</button>
              <button onClick={this.rsp(1)}>B</button>
              <button onClick={this.rsp(2)}>C</button>
              <button onClick={this.rsp(3)}>D</button> */}
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