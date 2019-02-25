import React, { Component } from 'react';
import './App.css';

import Display from './components/Display';
import DrumPads from './components/DrumPads';
import { connect } from 'react-redux';
import { changeSound } from './store';

class App extends Component {

  playSound = (soundId) => {
    let sound = document.getElementById(soundId);
    sound.parentElement.focus();
    let soundName = sound.parentElement.id
    sound.currentTime = 0;
    sound.play();
    this.props.changeSound(soundName);
  }

  render() {
    return (
      <div
        className="App"
        id="drum-machine"
      >
        <h1>Kaemon's Drum Machine!</h1>
        <Display currentSound={this.props.currentSound}/>
        <DrumPads
          drumPads={this.props.drumPads}
          playSound={this.playSound}
        />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return state;
}

let mapDispatchToProps = dispatch => {
  return {
    changeSound: (sound) => dispatch(changeSound(sound))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
