import React, { Component } from 'react';
import {Switch, Router, Route } from 'react-router-dom';
import hazel from './imgs/hazel.jpg';
import tubby from './imgs/tubby.jpg';
import whiskey from './imgs/whiskey.jpg';
import DogList from './DogList';
import './App.css';

export default class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render() {
    return (
      <Route path="/dog" render={()=><DogList dog={this.props.dogs}></DogList>}></Route>
    )
  }
}