import defaultState from './defaultState';
import { createStore } from 'redux';


const DRUMS = 'DRUMS';
const CHANGE_SOUND = "CHANGE_SOUND";

let drumReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DRUMS:
      return state;
    case CHANGE_SOUND:
      return { ...state, currentSound: action.sound }
    default:
      return state;
  }
}

let getDrums = () => {
  return {
    type: DRUMS
  }
}

let changeSound = sound => {
  return {
    type: CHANGE_SOUND,
    sound
  }
}

let store = createStore(drumReducer);

export { store, changeSound };