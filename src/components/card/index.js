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
        if(this.state.correct === true){
            this.props.setState({points: this.props.points+1})
            localStorage.setItem('@tf-game/points', this.props.points+1)
            this.props.reload()
        }else{
            if(this.props.points !== 0){
                this.props.setState({points: this.props.points-1})
                localStorage.setItem('@tf-game/points', this.props.points-1)
                this.props.reload()
            } else {
                window.alert('You Lose')
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
