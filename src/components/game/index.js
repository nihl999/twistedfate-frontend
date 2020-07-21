import React, { Component } from 'react';
import Card from '../card'
import './style.css'

class Game extends Component {
    state = { 
        question: '',
        responses: ['Teste1', 'Teste2', 'Teste3', 'Teste4']
    }
    render() {
        return (
            <div id="game">
                <div className="question-holder">Template Question</div>
                <div className="card-holder">
                    {this.state.responses.map(response => <Card response={response}/>)}
                </div>
            </div>
        );
    }
}

export default Game;
