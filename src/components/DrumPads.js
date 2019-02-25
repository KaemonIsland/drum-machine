import React, { Fragment, useEffect } from 'react';

import DrumPad from './DrumPad';

let DrumPads = ({ drumPads, playSound }) => {

  useEffect(() => {
    window.addEventListener('keydown', handlePlaySound);
  }, [])

  let handlePlaySound = e => {
    let key = e.key.toUpperCase();
    if (/[QWEASDZXC]/.test(key)) {
      playSound(key);
    }
  }

  return (
    <div className="drum-wrapper">
      {
        drumPads.map((drum, i) => {
          return <DrumPad
            key={i}
            soundId={drum.soundId}
            keyPress={drum.key}
            audio={drum.audioSrc}
            playSound={playSound}
          />
        })
      }
    </div>
  );
}

export default DrumPads;