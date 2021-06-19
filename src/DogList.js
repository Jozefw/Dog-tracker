import React, { Component } from 'react';
import './DogList.css';

export default class DogList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    render() {
        return (
            <div className="DogList">
                <h1 className="display-1 text-center">Hi Dogs List</h1>
                <div className="container">
                    <div className="row">
                        {this.props.dog.map((doggy)=>(<div className="Dog col-lg-4 text-center" key={doggy.name}>
                            <img src={doggy.src} alt={doggy.name}></img>
                            <h3>{doggy.name}</h3>
                    </div>))}
                    </div>
                </div>
            </div>
        )
    }
}
