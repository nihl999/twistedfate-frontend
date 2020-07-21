import React, { Component } from 'react';
import './style.css'

class Card extends Component {
    state = { 
        responses: '',
    }

    render() {
        return (
            <div className="card">
                <h3>{this.props.response}</h3>
                <button id="accept-card">SUBMETER</button>
            </div>
        );
    }
}

export default Card;
