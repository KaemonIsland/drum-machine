import React from 'react';

let DrumPad = props => {
  return (
      <button
      className="drum-pad"
      id={props.soundId}
      onClick={() => props.playSound(props.keyPress)}
      >
        {props.keyPress}
      <audio
        className="clip"
        src={props.audio}
        id={props.keyPress}
      >
        Your browser does not support the Audio element.
      </audio>
    </button>
  )
}

export default DrumPad;