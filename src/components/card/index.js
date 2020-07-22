import React, { Component } from 'react';
import './style.css'

class Card extends Component {
    state = { 
        responses: '',
        correct: false,
    }
    componentDidMount(){
        this.setState({correct: this.props.correct})
    }
    answer = (event) => {
        event.preventDefault()
        if(this.props.correct === true){
            this.props.setState({points: this.props.points+1})
            localStorage.setItem('@tf-game/points', this.props.points+1)
            this.props.reload()
        }else{
            if(this.props.points !== 0){
                this.props.setState({points: this.props.points-1})
                localStorage.setItem('@tf-game/points', this.props.points-1)
                this.props.reload()
            } else {
                window.alert('Poxa que pena desprovido de inteligencia, analfabeto, anta, azêmola, bronco, cavalgadura, estulto, idiota, ignorante, imbecil, inepto, lerdaço, néscio, palerma, parvo, tapado, tolo, toupeira (ps: n leve a serio)')
                this.props.reload()
            }
        }
    }
    render() {
        return (
            <div className="card">
                <h3>{this.props.response}</h3>
                <button id="accept-card" onClick={this.answer}>SUBMETER</button>
            </div>
        );
    }
}

export default Card;
