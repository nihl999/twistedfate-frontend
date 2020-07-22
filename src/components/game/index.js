import React, { Component } from 'react';
import axios from 'axios';
import Card from '../card'
import './style.css'

class Game extends Component {
    state = { 
        question: '',
        responses: [],
        points: 0,
        lastQuestion: '',
    }
    componentWillMount(){
        if(isNaN(localStorage.getItem('@tf-game/points')))
            this.setState({points: 0})
        else
            this.setState({points: parseInt(localStorage.getItem('@tf-game/points'))})
    }
    componentDidMount(){
        this.searchQuestions();
    }
    componentDidUpdate(){
        if(this.state.points >= 11){
            window.alert(`Você venceu, meus parabens genio, cabeçudo, inteligentao, sabe-tudo sabichão, fera, perito, crânio, engenhoso, brilhante, talentoso, astucioso, astuto, esperto, perspicaz, sagaz, conhecedor, experiente, experimentado, matraqueado, prático, sabedor, versado, baseado, esclarecido e habilidoso.`)
            this.setState({points: 0})
            localStorage.setItem('@tf-game/points', 0)
        }
    }
    shuffleArray = function (array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    get_random = function (list) {
        const data = list[Math.floor((Math.random()*list.length))]
        if(data._id !== this.state.lastQuestion){
            this.setState({lastQuestion: data._id})
            return data
        } else {  
            return this.get_random(list)
        } 
        //return list[Math.floor((Math.random()*list.length))];
    } 
    searchQuestions = async () => {
        const { data } = await axios.get('http://localhost:4500/biologia/cards/')
        const {question, responses} = this.get_random(data)
        console.log(question, responses)
        this.shuffleArray(responses)
        console.log(responses)
        this.setState({question})
        this.setState({responses})
    }


    render() {
        return (
            <div id="game">
                <div className="question-holder">{this.state.question}</div>
                <div id="points-holder"><h2>Pontos: {this.state.points}</h2></div>
                <div className="card-holder">
                    {this.state.responses.map((response, i) => <Card 
                    response={response.response} 
                    key={i}
                    correct={response.correct}
                    setState={p=>{this.setState(p)}}
                    points={this.state.points}
                    reload={this.searchQuestions}
                    />)}
                </div>
            </div>
        );
    }
}

export default Game;
