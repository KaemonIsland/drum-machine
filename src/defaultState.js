import boom from './assets/sounds/boom.wav';
import clap from './assets/sounds/clap.wav';
import hihat from './assets/sounds/hihat.wav';
import kick from './assets/sounds/kick.wav';
import openhat from './assets/sounds/openhat.wav';
import ride from './assets/sounds/ride.wav';
import snare from './assets/sounds/snare.wav';
import tink from './assets/sounds/tink.wav';
import tom from './assets/sounds/tom.wav';

let defaultState = {
  drumPads: [
    {
      key: "Q",
      audioSrc: boom,
      soundId: "boom"
    },
    {
      key: "W",
      audioSrc: clap,
      soundId: "clap"
    },
    {
      key: "E",
      audioSrc: hihat,
      soundId: "hihat"
    },
    {
      key: "A",
      audioSrc: kick,
      soundId: "kick"
    },
    {
      key: "S",
      audioSrc: openhat,
      soundId: "openhat"
    },
    {
      key: "D",
      audioSrc: ride,
      soundId: "ride"
    },
    {
      key: "Z",
      audioSrc: snare,
      soundId: "snare"
    },
    {
      key: "X",
      audioSrc: tink,
      soundId: "tink"
    },
    {
      key: "C",
      audioSrc: tom,
      soundId: "tom"
    },
  ],
  currentSound: 'Bass'
}

export default defaultState;