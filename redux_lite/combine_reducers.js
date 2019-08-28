// const countReducer = require("./count_reducer").countReducer;
// const increaseCount = require("./count_reducer").increaseCount;
// const decreaseCount = require("./count_reducer").decreaseCount;

// // import { countReducer, increaseCount, decreaseCount } from './count_reducer';
// import { colorReducer, lightenColor, darkenColor } from './color_reducer';

const countReducer = (count = 0, action) => {
  if (action.type === "increase") {
    return count + 1;
  } else if (action.type === "decrease") {
    return count - 1;
  } else {
    return count;
  }
};

const increaseCount = {
  type: "increase"
};

const decreaseCount = {
  type: "decrease"
};


// ________________________________________________


const colorReducer = (color = "gray", action) => {
  if (action.type === "darken") {
    return "black";
  } else if (action.type === "lighten") {
    return "white";
  } else {
    return color;
  }
};

const lightenColor = {
  type: "lighten"
};

const darkenColor = {
  type: "darken"
};


// ________________________________________________


const reducers = {
  counts: countReducer,
  colors: colorReducer
};

const state = {
  counts: 0,
  colors: "gray"
};


// ________________________________________________


const combineReducers = (reducers) => {
  return (prevState, action) => {
    // debugger
    let stateKey = Object.keys(prevState).filter(key => prevState[key] === action);
    let oldState = prevState[stateKey];
    Object.values(reducers).forEach(reducer => {
      reducer(oldState, action);
  
    });
    // let func = reducers[stateKey];
    // return func(oldState, action);
  };
};



window.combineReducers = combineReducers;
window.state = state;
window.reducers = reducers;

window.colorReducer = colorReducer;
window.lightenColor = lightenColor;
window.darkenColor = darkenColor;

window.countReducer = countReducer;
window.increaseCount = increaseCount;
window.decreaseCount = decreaseCount;

